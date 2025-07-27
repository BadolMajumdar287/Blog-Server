/**
 * 
 * 
 */

import { sendResponse } from "../lib/response.js";


export class DisLikeController {
    
        async DisLike(req,res) {
            
              try {

                
              } catch (error) {
                 console.error(error);
                 sendResponse(res,500,{error: "Internal Server Error."})
              }
        }


         async getall(req,res) {
            
               try {

                
                } catch (error) {
                 console.error(error);
                 sendResponse(res,500,{error: "Internal Server Error."})
               }
        }
    }