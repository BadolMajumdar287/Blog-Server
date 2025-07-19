import { Router } from "express";
import { AdminController, AdminController } from "../controller/admin.controller.js";


const AdminController = new AdminController();
const AdminRouter = Router();


AdminRouter.post("/register", AdminController.Register);
AdminRouter.post("/login", AdminController.Login);
AdminRouter.get("/session", AdminController.Session);
AdminRouter.get("/logout", AdminController.Logout);


