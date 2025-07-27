import { Router } from "express";
import { LikeController } from "../controller/like.controller.js";

export const LikeRouter = Router();
const L = new LikeController();

LikeRouter.post("/create", L.Like);
LikeRouter.get("/getall", L.GetAllLike);


