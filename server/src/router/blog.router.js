import { Router } from "express";
import { BlogController} from "../controller/blog.controller.js";
import { AdminMiddleware } from "../middleware/admin.middleware.js";


const B = new BlogController();
export const BlogRouter = Router();

BlogRouter.post("/create", AdminMiddleware, B.Create);
BlogRouter.get("/getall", AdminMiddleware, B.GetAll);
BlogRouter.get("/getbyid/:id", AdminMiddleware, B.GetById);
BlogRouter.put("/update/:id", AdminMiddleware, B.Update);
BlogRouter.delete("/delete/:id", AdminMiddleware, B.Delete);
