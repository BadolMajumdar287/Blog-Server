/**
 * 
 * 
 * 
 * 
 */

import { sendResponse } from "../lib/response.js";
import { LikeModel } from "../model/like.model.js";

export class LikeController {
    
      async Like(req,res) {
           
        try {

          const adminId = req.admin?._id;
          const userId  = req.user?._id;

         if( !adminId && !userId) return sendResponse(res,403,{error: "Session Is not valied"})

          const {like,blogId} = req.body;
             
          if(!like || !blogId) return sendResponse(res,401,{error: "Missing required params."});

          const exiting = await LikeModel.findOne({blogId, ...(adminId ? { adminId } : { userId }),});

          if(exiting) return sendResponse(res,401,{error: "you are already like this blog."});

          let LikeData = {like,blogId}

           if(adminId){
              LikeData.adminId = adminId;
           }else if(userId){
              LikeData.userId = userId;
           }

          const createLike = await LikeModel.create(LikeData)
                
          if(!createLike) return sendResponse(res,409,{error: "Like is not create."});

          return sendResponse(res,200,{message: "Like is create successfully",createLike});
            
        } catch (error) {
            console.error(error);
            sendResponse(res,500,{error: "Internal Server Error."})
        }
      }



      async GetAllLike(req,res) {
           
        try {
            
            const allLike = await LikeModel.find();
             
            if(!allLike) return sendResponse(res,403,{error: " All like is not get."});

            return sendResponse(res,200,{message: "get all like",allLike});
            
        } catch (error) {
            console.error(error);
            sendResponse(res,500,{error: "Internal Server Error."})
        }
      }
}