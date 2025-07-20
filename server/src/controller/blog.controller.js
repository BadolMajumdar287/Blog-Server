import { sendResponse } from "../lib/response.js";
import { BlogModel } from "../model/blog.model.js";

export class BlogController{




      async Create(req,res){
          
        try {

           const adminId = req.admin._id
            
            if(!adminId) return sendResponse(res,403,{error: "Admin is not authenticated."});

            const {title, content} = req.body;
           
            if(!title || !content) return sendResponse(res,400,{error: "Title and content are required."});
            
            const blog = BlogModel.create({adminId,title,content});

            if(!blog) return sendResponse(res,400,{error: "Blog could not be created."});

            return sendResponse(res,201,{message: "Blog created successfully.",blog});


        } catch (error) {
           
            console.error(error);
            return sendResponse(res,500,{error: "Internal Server Error"});
        }
      }








      async GetAll(req,res){
          
        try {

           const adminId = req.admin._id
             
           if(!adminId) return sendResponse(res,404,{error: "Admin is not found."});

           const allblog = await BlogModel.find({adminId});

           if(!allblog) return sendResponse(res,404,{error: "No blogs found."});

           return sendResponse(res,200,{message: "All blogs fetched successfully.",allblog});
            
        } catch (error) {
           
            console.error(error);
            return sendResponse(res,500,{error: "Internal Server Error"});
        }
      }






      async GetById(req,res){
          
        try {

             const blogId = req.params.id;
             
             if(!blogId) return sendResponse(res,400,{error: "Blog ID is required."});

              const blog = await BlogModel.findById(blogId);

             if(!blog) return sendResponse(res,404,{error: "Blog not found."});

             return sendResponse(res,200,{message: "Blog fetched successfully.",blog});

            } catch (error) {
           
            console.error(error);
            return sendResponse(res,500,{error: "Internal Server Error"});
        }
      }






      async Update(req,res){
          
        try {

          const blogId = req.params.id;

          if(!blogId) return sendResponse(res,400,{error: "Blog ID is required."});
           
          const {title, content} = req.body;

          if(!title || !content) return sendResponse(res,400,{error: "Title and content are required."});

          const updatedBlog = await BlogModel.findByIdAndUpdate(blogId, {$set: {title,content}}, {new: true});

          if(!updatedBlog) return sendResponse(res,400,{error: "Blog not found or could not be updated."});

          return sendResponse(res,200,{message: "Blog updated successfully.",updatedBlog});


            
        } catch (error) {
           
            console.error(error);
            return sendResponse(res,500,{error: "Internal Server Error"});
        }
      }





      async Delete(req,res){
          
        try {

            const blogId = req.params.id;

            if(!blogId) return sendResponse(res,400,{error: "Blog ID is required."});

            const deleteBlog = await BlogModel.findByIdAndDelete(blogId);

            if(!deleteBlog) return sendResponse(res,400,{error: "Blog not found or could not be deleted."});

            return sendResponse(res,200,{message: "Blog deleted successfully."});
            
        } catch (error) {
           
            console.error(error);
            return sendResponse(res,500,{error: "Internal Server Error"});
        }
      }
    
}