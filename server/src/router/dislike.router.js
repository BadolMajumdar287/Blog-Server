import { Router } from "express";
import { DisLikeController } from "../controller/dislike.controller.js";

export const DislikeRouter = Router();
const D = new DisLikeController();

  
DislikeRouter.post("/create", D.DisLike);
DislikeRouter.get("/getall", D.getall);