import { AdminMiddleware } from "./admin.middleware.js";
import { UserMiddleware } from "./auth.middleware.js";
import { sendResponse } from "../lib/response.js";

export const AdminOrUserMiddleware = async (req, res, next) => {
  await AdminMiddleware(req, res, async (adminErr) => {
    if (!adminErr && req.admin) return next();
  
    await UserMiddleware(req, res, (userErr) => {
      if (!userErr && req.user) return next();
      return sendResponse(res, 403, { error: "Unauthorized access." });
    });
  });
};