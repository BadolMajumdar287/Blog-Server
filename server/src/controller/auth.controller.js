//**
// */

import { sendResponse } from "../lib/response.js";
import { userModel } from "../model/user.model.js";
import { setSessionCookie } from "../lib/cookie.js";
import { hashPassword } from "../lib/bcrypt.js";
import { comparePassword } from "../lib/bcrypt.js";
import { clearSessionCookie } from "../lib/cookie.js";



export class AuthController {
       
    async UserRegister(req,res) {

        try {

            const {name,email,password} = req.body;

            if(!name || !email || !password) return sendResponse(res,404,{error: "All fields are required."});
            
            const exitsEmail = await userModel.findOne({email});

            if(exitsEmail) return sendResponse(res,400,{error: "User email Already Exit."});

            const user = await userModel.create({name,email,password:hashPassword(password)});

            if(!user) return sendResponse(res,404,{error: "User Not Register."});

            setSessionCookie(res,user._id.toString());

            return sendResponse(res,201,{message: "user create Succesfully",user});

           
            
        } catch (error) {
            
             console.log(error);
             return sendResponse(res,500,{error: "Internal Server Error"});
        }
         
    }


    
    
    async UserLogin(req,res) {

        try {

             const {email,password} = req.body;

             if(!email || !password) return sendResponse(res,404,{error: "All fields are required." });

             const user = await userModel.findOne({email});

            if(!user) return sendResponse(res,404,{error: "Invalid Credentials."});
             
              const ispaswordValied = comparePassword(password,user.password);

              if(!ispaswordValied) return sendResponse(res,404,{error: "Invalid Credentials."});

              setSessionCookie(res,user._id.toString());

              return sendResponse(res,200,{error: "Login Sucessfully.",user});

            
        } catch (error) {
            
             console.log(error);
             return sendResponse(res,500,{error: "Internal Server Error"});
        }
         
    }


    async UserSession(req,res) {

        try {
            
            const userId = req.user;

           if(!userId) return sendResponse(res,401,{error: "Unauthorized."});

           const user = await userModel.findById(userId);

           if(!user) return sendResponse(res,404,{error: "Session Not Valid."});

           return sendResponse(res,200,{message: "Valid Session.",user});

          
        } catch (error) {
            
             console.log(error);
             return sendResponse(res,500,{error: "Internal Server Error"});
        }
         
    }


    async UserLogout(req,res) {

        try {

            const userId = req.user;
            
            if(!userId) return sendResponse(res,401,{error: "Unauthorized."});

            const user = await userModel.findById(userId);

            if(!user) return sendResponse(res,404,{error: "User Not found."});

            clearSessionCookie(res);

            return sendResponse(res,200,{message: "Logout Succesfully."})


            
        } catch (error) {
            
             console.log(error);
             return sendResponse(res,500,{error: "Internal Server Error"});
        }
         
    }
}