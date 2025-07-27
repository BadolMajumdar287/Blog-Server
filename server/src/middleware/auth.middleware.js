import { userModel } from "../model/user.model.js";
import { sendResponse } from "../lib/response.js";


export const UserMiddleware = async (req,res,next) => {

       try {
          
        const SessionKeyUser = req.cookies["session"] || req.headers["session"];
        
        if(!SessionKeyUser) return sendResponse(res,403,{error: "Session is not valid."});

         const user = await userModel.findById(SessionKeyUser);

         if(!user) return sendResponse(res,404,{error: "user not found."});

         req.user = user;

         next();

        
       } catch (error) {

        console.error(error);
        return sendResponse(res,500,{error: "[MD] Internal Server error."})
        
       }


}