import { sendResponse } from "../lib/response.js";
import { Adminmodel } from "../model/admin.model.js";


export const AdminMiddleware = async (req, res, next) => {

    try {

        const SessionKey = req.cookies["session"] || req.headers["session"];
            
        if(!SessionKey) return sendResponse(res,403,{error: "Session is Not valied."});

         const admin = await Adminmodel.findById(SessionKey);

         if(!admin) return sendResponse(res,403,{error: "Session is not valied."});

         req.admin = admin;

         next();
        
    } catch (error) {
        
        console.error(error);
        return sendResponse(res,500,{error: "[MD] Internal Server Error."});

    }


}