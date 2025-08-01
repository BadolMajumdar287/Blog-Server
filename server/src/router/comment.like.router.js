import { Router } from "express";
import { CommentLikeController } from "../controller/comment.like.controller.js";
import { UserMiddleware } from "../middleware/auth.middleware.js";
import { AdminOrUserMiddleware } from "../middleware/admin.user.middleware.js";


export const CommentLikeRouter = Router();

const C = new CommentLikeController();


CommentLikeRouter.post("/create", AdminOrUserMiddleware, C.Create);
CommentLikeRouter.get("/getall",  C.GetAll);




