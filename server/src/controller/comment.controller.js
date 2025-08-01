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

            const {comment,blogId} = req.body;
            
               
            if(!comment || !blogId) return sendResponse(res,404,{error: "Comment Is not found."});
                
               let commentdata = {comment,blogId}

            if(adminId){

                  commentdata.adminId = adminId;

            }else if(userId){

                   commentdata.userId = userId
            }


             const commentData = { comment, blogId, ...(adminId ? { adminId } : { userId }) };

            if(!commentData) return sendResponse(res,403,{error: "Comment not create."});

            const created = await CommentModel.create(commentdata);

            if(!created) return sendResponse(res,400,{error: "not created"});

            const populated = await created.populate([
                  {path: "adminId",adminId: " name fullname"},
                  {path: "userId", userId: "name fullname"}
            ])

            if(!populated) return sendResponse(res,403,{error: "Not pooluted."})

            return sendResponse(res,201,{message: "Create Comment.",populated});
                
            } catch (error) {
                
                console.error(error);
                return sendResponse(res,500,{error:"Internal Server Error"});

            }

      }


      async CommentGetAll(req,res) {
        
            try {
                  

                  const allComment = await CommentModel.find()
                              .populate([
                               { path: 'userId', select: 'name fullname' },
                               { path: 'adminId', select: 'name fullname' }
                               ]);


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


                  const userId = req.user?._id;
                  const adminId = req.admin?._id;
                
                   if(!userId && !adminId) return sendResponse(res,403,{error: "Session is not valied."})
                     
                   const commentId = req.params.id;
                        
                   if(!commentId) return sendResponse(res,403,{error: "comment id is not here"});

                  const  comment = await CommentModel.findById(commentId);

                  if(!comment) return sendResponse(res,404,{error: "comment Not found."})

                  const isUser = comment.userId?.toString() === String(userId);
                  const isAdmin = comment.adminId?.toString() === String(adminId); 
                  
                  if(!isUser && !isAdmin) return sendResponse(res,403,{error: "Unauthorized to delete this comment."})
                     
                     const commentDelete =  await CommentModel.deleteOne({ _id: commentId });

                  if(!commentDelete) return sendResponse(res,403,{error: "Comment not deleted"})

                  return sendResponse(res,200,{message: "Comment Delete Sucesfully.",commentDelete});
                    
            } catch (error) {
                
                console.error(error);
                return sendResponse(res,500,{error:"Internal Server Error"});

            }

      }

}