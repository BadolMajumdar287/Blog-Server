import { Router } from "express";
import { DisLikeController } from "../controller/dislike.controller.js";
import { UserMiddleware } from "../middleware/auth.middleware.js";
import { AdminOrUserMiddleware } from "../middleware/admin.user.middleware.js";

export const DislikeRouter = Router();
const D = new DisLikeController();

  
DislikeRouter.post("/create", UserMiddleware , D.DisLike);
DislikeRouter.get("/getall", UserMiddleware ,D.getall);