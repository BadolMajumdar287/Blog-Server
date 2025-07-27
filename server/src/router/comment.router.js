import { Router } from "express";
import { CommentController } from "../controller/comment.controller.js";

export const CommentRouter = Router();
const C = new CommentController();


CommentRouter.post("/create", C.CommentCreate);
CommentRouter.get("/getall", C.CommentGetAll);
CommentRouter.get("/getbyid", C.CommentGetById);
CommentRouter.delete("/delete",C.CommentDelete);


