import { Router } from "express";
import { AuthController } from "../controller/auth.controller.js";
import { UserMiddleware } from "../middleware/auth.middleware.js";

export const AuthRouter = Router();
const A = new AuthController();


AuthRouter.post("/create", A.UserRegister);
AuthRouter.post("/login", A.UserLogin);
AuthRouter.get("/session", UserMiddleware, A.UserSession);
AuthRouter.get("/logout", UserMiddleware,  A.UserLogout);

