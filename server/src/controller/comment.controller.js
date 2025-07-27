//**
// 

import { sendResponse } from "../lib/response.js";

export class CommentController {

      async CommentCreate(req,res) {
        
            try {
                
            } catch (error) {
                
                console.error(error);
                return sendResponse(res,500,{error:"Internal Server Error"});

            }

      }


      async CommentGetAll(req,res) {
        
            try {
                
            } catch (error) {
                
                console.error(error);
                return sendResponse(res,500,{error:"Internal Server Error"});

            }

      }


      async CommentGetById(req,res) {
        
            try {
                
            } catch (error) {
                
                console.error(error);
                return sendResponse(res,500,{error:"Internal Server Error"});

            }

      }


      async CommentDelete(req,res) {
        
            try {
                
            } catch (error) {
                
                console.error(error);
                return sendResponse(res,500,{error:"Internal Server Error"});

            }

      }

}