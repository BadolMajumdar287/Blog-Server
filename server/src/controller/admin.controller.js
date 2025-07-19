import { sendResponse } from "../lib/response.js";


export class  AdminController {

       async  Register(req,res){

                  try {
                    
                  } catch (error) {
                    
                    console.error(error);
                    return sendResponse(res,500,{error: "Internal Server Error"})

                  }

       }



       async  Login(req,res){

                  try {
                    
                  } catch (error) {
                    
                    console.error(error);
                    return sendResponse(res,500,{error: "Internal Server Error"})

                  }

       }



       async  Session(req,res){

                  try {
                    
                  } catch (error) {
                    
                    console.error(error);
                    return sendResponse(res,500,{error: "Internal Server Error"})

                  }

       }



       async  Logout(req,res){

                  try {
                    
                  } catch (error) {
                    
                    console.error(error);
                    return sendResponse(res,500,{error: "Internal Server Error"})

                  }

       }
   
}