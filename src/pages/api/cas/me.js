// pages/api/cas/me.js
export default async function handler(req, res) {
  const cookie = req.headers.cookie || "";
  const match = /sessid=([^;]+)/.exec(cookie);
  if (!match) {
    return res.status(401).json({ ok: false, user: null });
  }
  const sessid = match[1];
  // Retrieve from in-memory store (replace with DB/cache in production)
  const sess = (
    globalThis.SESSION_STORE ||
    globalThis.__SESSION_STORE__ ||
    new Map()
  ).get(sessid);
  if (!sess || sess.expiresAt < Date.now()) {
    return res.status(401).json({ ok: false, user: null });
  }
  res.status(200).json({ ok: true, user: { username: sess.username } });
}
