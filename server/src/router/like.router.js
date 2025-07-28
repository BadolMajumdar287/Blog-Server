import { Router } from "express";
import { LikeController } from "../controller/like.controller.js";
import { UserMiddleware } from "../middleware/auth.middleware.js";
import { AdminOrUserMiddleware } from "../middleware/admin.user.middleware.js";

export const LikeRouter = Router();
const L = new LikeController();

LikeRouter.post("/create", UserMiddleware, L.Like);
LikeRouter.get("/getall", UserMiddleware,L.GetAllLike);


