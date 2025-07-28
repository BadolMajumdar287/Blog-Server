import { AdminMiddleware } from "./admin.middleware.js";
import { UserMiddleware } from "./auth.middleware.js";
import { sendResponse } from "../lib/response.js";

export const AdminOrUserMiddleware = async (req, res, next) => {
  await AdminMiddleware(req, res, async (adminErr) => {
    if (!adminErr && req.admin) return next();
  
    await UserMiddleware(req, res, (userErr) => {
      if (!userErr && req.user) return next();
      return sendResponse(res, 403, { error: "Unauthorized access." });
    });
  });
};




// export const AdorUsMiddleware =async(req,res) => {
       
//       try {

//            if(AdminMiddleware){
//               return AdminMiddleware;
//            }  else if(UserMiddleware){
//               return UserMiddleware;
//            }
            
        
//        } catch (error) {

//           console.error(error);
//           return sendResponse(res,500,{error: "Internal Server Error."})
        
//        }
// }


