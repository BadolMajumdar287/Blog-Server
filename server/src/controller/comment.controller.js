//**
// 


import { sendResponse } from "../lib/response.js";
import { CommentModel } from "../model/comment.model.js";

export class CommentController {

      async CommentCreate(req,res) {
        
            try {

            const adminId = req.admin?._id;
         
            const userId = req.user?._id;
            
             
              
            if( !adminId && !userId) return sendResponse(res,403,{error: "Session Is not valied"})

            const {comment} = req.body;
           
               
            if(!comment) return sendResponse(res,404,{error: "Comment Is not found."});
                
               let commentdata = {comment}

            if(adminId){

                  commentdata.adminId = adminId;

            }else if(userId){

                   commentdata.userId = userId
            }


            const createComment = await CommentModel.create(commentdata);

            if(!createComment) return sendResponse(res,403,{error: "Comment not create."});

            return sendResponse(res,201,{message: "Create Comment.",commentdata});
                
            } catch (error) {
                
                console.error(error);
                return sendResponse(res,500,{error:"Internal Server Error"});

            }

      }


      async CommentGetAll(req,res) {
        
            try {

                  const allComment = await CommentModel.find();

                  if(!allComment) return sendResponse(res,404,{error: "Comment is Not found."})

                  return sendResponse(res,200,{message: "Get all Comment.",allComment});

                  
                  
                
            } catch (error) {
                
                console.error(error);
                return sendResponse(res,500,{error:"Internal Server Error"});

            }

      }


      async CommentGetById(req,res) {
        
            try {

                  const commentId = req.params.id;
                
                  if(!commentId) return sendResponse(res,403,{error: "CommentId Is not here"})

                  const comment = await CommentModel.findById(commentId);

                  if(!comment) return sendResponse(res,404,{error: "comment Not found."});

                  return sendResponse(res,200,{message: "comment get Sucessfully.",comment})
                
            } catch (error) {
                
                console.error(error);
                return sendResponse(res,500,{error:"Internal Server Error"});

            }

      }


      async CommentDelete(req,res) {
        
            try {

                  const commentId = req.params.id;
                    
                  if(!commentId) return sendResponse(res,403,{error: "comment id is not here"});

                  const commentDelete = await CommentModel.findByIdAndDelete(commentId);

                  if(!commentDelete) return sendResponse(res,404,{error: "Comment not delete."});

                  return sendResponse(res,200,{message: "Comment Delete Sucesfully.",commentDelete});
                
            } catch (error) {
                
                console.error(error);
                return sendResponse(res,500,{error:"Internal Server Error"});

            }

      }

}