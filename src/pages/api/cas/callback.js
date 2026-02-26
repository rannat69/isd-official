// pages/api/cas/callback.js
import fetch from "node-fetch";
import { parseStringPromise } from "xml2js";
import jwt from "jsonwebtoken";

// In-memory session store (replace with DB/cache in production)
const SESSION_STORE = new Map();

// Your app's JWT secret (store securely)
const JWT_SECRET = process.env.JWT_SECRET || "change-me";

export default async function handler(req, res) {
  const ticket = req.query.ticket;
  // The service URL must match exactly what you sent to CAS (including scheme/host+path)
  // Reconstruct the service URL you expect to validate against:
  const service = new URL(
    "/api/cas/callback",
    `https://${req.headers.host}`,
  ).toString();

  if (!ticket) {
    return res.status(400).send("Missing ticket");
  }

  // Use CAS v2/v3 serviceValidate (choose one; v3 is similar)
  const validateUrl = `https://cas.ust.hk/cas/serviceValidate?service=${encodeURIComponent(service)}&ticket=${encodeURIComponent(ticket)}`;

  try {
    const r = await fetch(validateUrl);
    const text = await r.text();

    // The CAS serviceValidate response is XML. Parse it.
    const parsed = await parseStringPromise(text);

    // Basic parsing for a successful login (structure may vary slightly by CAS version)
    const serviceResponse =
      parsed["cas:serviceResponse"] || parsed["serviceResponse"];
    const success =
      serviceResponse?.["cas:authenticationSuccess"] ||
      serviceResponse?.["authenticationSuccess"];
    if (!success) {
      return res.status(401).send("CAS ticket validation failed");
    }

    const userElem = success[0]?.["cas:user"] || success[0]?.["user"];
    const username = Array.isArray(userElem) ? userElem[0] : userElem;

    // Optional: read attributes if available
    const attributes =
      success[0]?.["cas:attributes"]?.[0] ||
      success[0]?.["attributes"]?.[0] ||
      {};

    // Create a session token for your app
    const sessionToken = jwt.sign({ username, attributes }, JWT_SECRET, {
      expiresIn: "2h",
    });

    // Persist session (basic example)
    const sessionId = `sess-${Date.now()}-${Math.random().toString(36).slice(2)}`;
    SESSION_STORE.set(sessionId, {
      username,
      attributes,
      expiresAt: Date.now() + 2 * 60 * 60 * 1000,
    });

    // Set a secure, HTTP-only cookie with your session ID
    res.setHeader(
      "Set-Cookie",
      `sessid=${sessionId}; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=${2 * 60 * 60}`,
    );
    // Also return the app's session token if you want to use it in API calls
    res.setHeader("X-Session-Token", sessionToken);

    // Redirect to a post-login page in your app, or to the original service
    // For a clean UX, redirect to the app's home
    res.redirect("/dashboard");
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal error during CAS validation");
  }
}
