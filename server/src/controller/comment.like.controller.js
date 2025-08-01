//**
// */


import { sendResponse } from "../lib/response.js";
import { CommentLikeModel } from "../model/comment.like.model.js";

export class CommentLikeController {
    

    async  Create(req,res) {

        try {
              
           const adminId = req.admin?._id;

           const userId = req.user?._id;
            
            if(!adminId && !userId) return sendResponse(res,401,{error: "Session Is not Valied."})

            const {blogId,commentId,like} = req.body;
                  
            if(!blogId || !commentId || !like) return sendResponse(res,404,{error:"Missing required params."});

            const exitingcommentlike = await CommentLikeModel.findOne({blogId,commentId, ...(adminId ? { adminId } : { userId }),});
               
            if(exitingcommentlike) return sendResponse(res,401,{error: "you are already like this blog."});

            let CommentLikeDate = {blogId,commentId,like};
                 
            if(adminId){

                CommentLikeDate.adminId = adminId;

            }else if(userId){

                CommentLikeDate.userId = userId;

            }

           const createcommentlike = await CommentLikeModel.create(CommentLikeDate);

           if(!createcommentlike) return sendResponse(res,401,{error: "Not create CommentLike"});

           return sendResponse(res,201,{message: "create Sucessfull.",createcommentlike});
            
        } catch (error) {
            
            console.error(error);
            return sendResponse(res,500,{error: "Internal Server Error."});
        }
        
    }




        async  GetAll(req,res) {

        try {
             
            const allcommentlike = await CommentLikeModel.find();
                 
            if(!allcommentlike) return sendResponse(res,401,{error: "No CommentLike."});

            return sendResponse(res,200,{message: "Get commentd.",allcommentlike});
            
        } catch (error) {
            
            console.error(error);
            return sendResponse(res,500,{error: "Internal Server Error."});
        }
        
    }
}