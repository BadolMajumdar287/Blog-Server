export function setSessionCookie(res, value) {
  return res.cookie("session", value, {
    maxAge: 60 * 60 * 24 * 1000 * 3,
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production'
  });
}
export function clearSessionCookie(res) {
  return res.clearCookie("session");
} 