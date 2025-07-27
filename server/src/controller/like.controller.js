/**
 * 
 * 
 * 
 * 
 */

import { sendResponse } from "../lib/response.js";


export class LikeController {
    
      async Like(req,res) {
           
        try {

            
        } catch (error) {
            console.error(error);
            sendResponse(res,500,{error: "Internal Server Error."})
        }
      }



      async GetAllLike(req,res) {
           
        try {
            
            
        } catch (error) {
            console.error(error);
            sendResponse(res,500,{error: "Internal Server Error."})
        }
      }
}