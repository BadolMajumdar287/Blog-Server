import { Router } from "express";
import { BlogController} from "../controller/blog.controller.js";


const B = new BlogController();
export const BlogRouter = Router();

BlogRouter.post("/create", B.Create);
BlogRouter.get("/getall", B.GetAll);
BlogRouter.get("/getbyid/:id", B.GetById);
BlogRouter.put("/update/:id", B.Update);
BlogRouter.delete("/delete/:id", B.Delete);
