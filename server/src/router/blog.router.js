import { Router } from "express";
import { BlogController, BlogController } from "../controller/blog.controller.js";


const BlogController = new BlogController();
const BlogRouter = Router();

BlogRouter.post("/create", BlogController.Create);
BlogRouter.get("/getall", BlogController.GetAll);
BlogRouter.get("/getbyid/:id", BlogController,GetById);
BlogRouter.put("/update/:id", BlogController.Update);
BlogRouter.delete("/delete/:id", BlogController.Delete);
