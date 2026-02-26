// pages/api/cas/login.js
import querystring from 'querystring';

export default function handler(req, res) {
    // The URL the CAS server will redirect back to after login
    const serviceCallback = new URL(
        '/api/cas/callback',
        `https://${req.headers.host}`
    );
    // Optional: include a "service" parameter to remember where to return after login
    const params = {
        service: serviceCallback.toString(),
    };
    const loginUrl = `https://cas.ust.hk/cas/login?${querystring.stringify(params)}`;
    res.redirect(loginUrl);
}
