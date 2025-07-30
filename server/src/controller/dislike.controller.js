/**
 * 
 * 
 */

import { sendResponse } from "../lib/response.js";
import { DislikeModel } from "../model/dislike.model.js";


export class DisLikeController {
    
        async DisLike(req,res) {
            
              try {

                  const adminId = req.admin?._id
                  const userId = req.user?._id
                  
                if( !adminId && !userId) return sendResponse(res,403,{error: "Session Is not valied"});

                  const {disLike,blogId} = req.body;
                 
                 if(!disLike || !blogId) return sendResponse(res,400,{error: "blogId and disLike are required"});
                 
                  
              const exist = await DislikeModel.findOne({blogId, ...(adminId ? {adminId} : {userId})});

              if(exist) return sendResponse(res, 409, { error: "Already disliked this blog" });
                 

                 let disLikedata = {disLike,blogId};

                 if(adminId){
                    disLikedata.adminId = adminId
                 }else if(userId){
                     disLikedata.userId =userId
                 }

                 const craeteDisliek = await DislikeModel.create(disLikedata);

                  if(!craeteDisliek) return sendResponse(res,403,{error: "not create dislike."});
                  
                  return sendResponse(res,200,{message: "Create Dislike.",craeteDisliek});
                
              } catch (error) {
                 console.error(error);
                 sendResponse(res,500,{error: "Internal Server Error."})
              }
        }


         async getall(req,res) {
            
               try {

                  const alldislike = await DislikeModel.find();

                  if(!alldislike) return sendResponse(res,300,{error: "Not get all Dislike"});

                  sendResponse(res,200,{message: "get all dislike.",alldislike})

                
                } catch (error) {
                 console.error(error);
                 sendResponse(res,500,{error: "Internal Server Error."})
               }
        }
    }