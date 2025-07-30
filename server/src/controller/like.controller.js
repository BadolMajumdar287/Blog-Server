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

          const exitAdminandUser = await LikeModel.findOne({adminId,userId});

          if(exitAdminandUser) return sendResponse(res,400,{error: "you are create like"})
            
          const {like,blogId} = req.body;
            
          if(!like || ! blogId) return sendResponse(res,404,{error: "like Is not found."});

          let likedata = {like,blogId}

           if(adminId){
              likedata.adminId = adminId;
           }else if(userId){
              likedata.userId = userId;
           }

           const createLike = await LikeModel.create(likedata);

           if(!createLike) return sendResponse(res,404,{error: "like is not create"});

           return sendResponse(res,200,{message: "craete like.",createLike})
            
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