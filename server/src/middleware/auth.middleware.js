import { userModel } from "../model/user.model.js";
import { sendResponse } from "../lib/response.js";


export const UserMiddleware = async (req,res,next) => {
      
         

       try {
          
        const SessionKeyUser = req.cookies["sessionUser"] || req.headers["sessionUser"];
               
        if(!SessionKeyUser) return sendResponse(res,403,{error: "Session is not valid."});
        
         const trimmed = SessionKeyUser.trim();

       if (!mongoose.Types.ObjectId.isValid(trimmed)) return sendResponse(res, 403, { error: "Invalid session format." });
    


         const user = await userModel.findById(trimmed);
              
         if(!user) return sendResponse(res,404,{error: "user not found."});

         req.user = user;

         next();

        
       } catch (error) {

        console.error(error);
        return sendResponse(res,500,{error: "[MD] Internal Server error."})
        
       }


}