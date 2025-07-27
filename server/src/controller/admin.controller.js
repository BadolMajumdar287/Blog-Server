import { sendResponse } from "../lib/response.js";
import { Adminmodel } from "../model/admin.model.js";
import { hashPassword,comparePassword } from "../lib/bcrypt.js";
import { setSessionCookie,clearSessionCookie } from "../lib/cookie.js";

export class  AdminController {

       async  Register(req,res){

                  try {

                    const { firstname, lastname, fullname, email, password } = req.body;

                    if (!firstname || !lastname || !fullname || !email || !password) return sendResponse(res,400,{error: "All fields are required"});

                    const existingAdmin = await Adminmodel.findOne({ email });

                    if(existingAdmin) return sendResponse(res,400,{error: "Admin already exists"});

                    const admin = await Adminmodel.create({firstname,lastname,fullname,email,password: hashPassword(password)});
                    
                     if(!admin) return sendResponse(res,500,{error: "failed to create admin"});

                     setSessionCookie(res, admin._id.toString());
                     
                     return sendResponse(res,201,{message: "Admin registered successfully",admin});
                    
                     } catch (error) {
                    
                    console.error(error);
                    return sendResponse(res,500,{error: "Internal Server Error"})

                  }

       }



       async  Login(req,res){

                  try {

                    const {email,password} = req.body;

                     if(!email || !password) return sendResponse(res,400,{error: "All fields are required"});

                     const admin = await Adminmodel.findOne({email});

                     if (!admin) return sendResponse(res,404,{error: "Invalid Credentials."});

                    const ispaswordValied = comparePassword(password, admin.password);

                    if(!ispaswordValied) return sendResponse(res,400,{error: "Invalid Credentials."});

                    setSessionCookie(res, admin._id.toString());
                     
                    return sendResponse(res,200,{message: "Login successful",admin});


                  } catch (error) {
                    
                    console.error(error);
                    return sendResponse(res,500,{error: "Internal Server Error"})

                  }

       }



       async  Session(req,res){

                  try {

                    const adminId = req.admin;
                      
                    if(!adminId) return sendResponse(res,401,{error: "Unauthorized"});

                    const admin = await Adminmodel.findById(adminId);

                    if(!admin) return sendResponse(res,404,{error: "Admin Not Found"});

                    return sendResponse(res,200,{message: "Admin session",admin});
                    
                  } catch (error) {
                    
                    console.error(error);
                    return sendResponse(res,500,{error: "Internal Server Error"})

                  }

       }



       async  Logout(req,res){

                  try {

                    const adminId = req.admin;
                  
                    if(!adminId) return sendResponse(res,401,{error: "Unauthorized"});

                    const admin = await Adminmodel.findById(adminId);

                    if(!admin) return sendResponse(res,400,{error: "Admin Not Found"});

                    clearSessionCookie(res);

                    return sendResponse (res,200,{message: "Logout successful."});
                    
                  } catch (error) {
                    
                    console.error(error);
                    return sendResponse(res,500,{error: "Internal Server Error"})

                  }

       }
   
}