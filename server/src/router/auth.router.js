import { Router } from "express";
import { AuthController } from "../controller/auth.controller.js";

export const AuthRouter = Router();
const A = new AuthController();


AuthRouter.post("/create", A.UserRegister);
AuthRouter.post("/login", A.UserLogin);
AuthRouter.get("/session",A.UserSession);
AuthRouter.get("/logout", A.UserLogout);

