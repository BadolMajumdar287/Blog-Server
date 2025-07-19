import { sendResponse } from "../lib/response.js";


export class BlogController{

      async Create(req,res){
          
        try {
            
        } catch (error) {
           
            console.error(error);
            return sendResponse(res,500,{error: "Internal Server Error"});
        }
      }


      async GetAll(req,res){
          
        try {
            
        } catch (error) {
           
            console.error(error);
            return sendResponse(res,500,{error: "Internal Server Error"});
        }
      }



      async GetById(req,res){
          
        try {
            
        } catch (error) {
           
            console.error(error);
            return sendResponse(res,500,{error: "Internal Server Error"});
        }
      }




      async Update(req,res){
          
        try {
            
        } catch (error) {
           
            console.error(error);
            return sendResponse(res,500,{error: "Internal Server Error"});
        }
      }



      async Delete(req,res){
          
        try {
            
        } catch (error) {
           
            console.error(error);
            return sendResponse(res,500,{error: "Internal Server Error"});
        }
      }
    
}