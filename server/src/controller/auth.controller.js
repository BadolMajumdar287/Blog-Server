//**
// */

import { sendResponse } from "../lib/response.js";


export class AuthController {
       
    async UserCreate(req,res) {

        try {
            
        } catch (error) {
            
             console.log(error);
             return sendResponse(res,500,{error: "Internal Server Error"});
        }
         
    }


    async UserGet(req,res) {

        try {
            
        } catch (error) {
            
             console.log(error);
             return sendResponse(res,500,{error: "Internal Server Error"});
        }
         
    }


    async UserSession(req,res) {

        try {
            
        } catch (error) {
            
             console.log(error);
             return sendResponse(res,500,{error: "Internal Server Error"});
        }
         
    }


    async UserLogout(req,res) {

        try {
            
        } catch (error) {
            
             console.log(error);
             return sendResponse(res,500,{error: "Internal Server Error"});
        }
         
    }
}