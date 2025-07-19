import express from "express";
import { AdminController } from "../controller/admin.controller.js";
import { AdminMiddleware } from "../middleware/admin.middleware.js";

const A = new AdminController();
export const AdminRouter = express.Router()


AdminRouter.post("/register", A.Register);
AdminRouter.post("/login", A.Login);
AdminRouter.get("/session", AdminMiddleware, A.Session);
AdminRouter.get("/logout", AdminMiddleware, A.Logout);


