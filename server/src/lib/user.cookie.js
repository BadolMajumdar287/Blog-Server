export function setSessionCookieUser(res, value) {
   return res.cookie("sessionUser", value, {
    maxAge: 60 * 60 * 24 * 1000 * 3,
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax'
    
  });
}
export function clearSessionCookieUser(res) {
  return res.clearCookie("sessionUser");
}  