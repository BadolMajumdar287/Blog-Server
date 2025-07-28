import { Router } from "express";
import { CommentController } from "../controller/comment.controller.js";
import { AdminOrUserMiddleware } from "../middleware/admin.user.middleware.js";
import { AdminMiddleware } from "../middleware/admin.middleware.js";
import { UserMiddleware } from "../middleware/auth.middleware.js";


export const CommentRouter = Router();
const C = new CommentController();


CommentRouter.post("/create",UserMiddleware, C.CommentCreate);
CommentRouter.get("/getall", AdminOrUserMiddleware , C.CommentGetAll);
CommentRouter.get("/getbyid/:id", AdminOrUserMiddleware, C.CommentGetById);
CommentRouter.delete("/delete/:id", AdminOrUserMiddleware, C.CommentDelete);


    