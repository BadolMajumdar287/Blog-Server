import { Router } from "express";
import { AdminController } from "../controller/admin.controller.js";

export const AuthRouter = Router();
const A = new AdminController();


AuthRouter.post("/create", A.Register);
AuthRouter.post("/login", A.Login);
AuthRouter.get("/session",A.Session);
AuthRouter.get("/logout", A.Logout);

