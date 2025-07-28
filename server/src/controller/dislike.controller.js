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

                 const existadminuser = await DislikeModel.findOne({adminId,userId});

                 if(existadminuser) return sendResponse(res,403,{error: "exit dislike"});

                 const {disLike} = req.body;

                 let disLikedata = {disLike};

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

                  const getall = await DislikeModel.find();

                  if(!getall) return sendResponse(res,300,{error: "Not get all Dislike"});

                  sendResponse(res,200,{message: "get all dislike.",getall})

                
                } catch (error) {
                 console.error(error);
                 sendResponse(res,500,{error: "Internal Server Error."})
               }
        }
    }