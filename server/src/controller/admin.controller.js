import { sendResponse } from "../lib/response.js";
import { Adminmodel } from "../model/admin.model.js";
import { hashPassword,comparePassword } from "../lib/bcrypt.js";
import { setSessionCookieAdmin,clearSessionCookieAdmin } from "../lib/admin.cookie.js";

export class  AdminController {

       async  Register(req,res){

                  try {

                    const { firstname, lastname, fullname, email, password } = req.body;

                    if (!firstname || !lastname || !fullname || !email || !password) return sendResponse(res,400,{error: "All fields are required"});

                    const existingAdmin = await Adminmodel.findOne({ email });

                    if(existingAdmin) return sendResponse(res,400,{error: "Admin already exists"});

                    const admin = await Adminmodel.create({firstname,lastname,fullname,email,password: hashPassword(password)});
                    
                     if(!admin) return sendResponse(res,500,{error: "failed to create admin"});

                     setSessionCookieAdmin(res, admin._id.toString());
                     
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

                    const ispaswordValied = await comparePassword(password, admin.password);

                    if(!ispaswordValied) return sendResponse(res,400,{error: "Invalid Credentials."});

                    setSessionCookieAdmin(res, admin._id.toString());
                     
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

                    clearSessionCookieAdmin(res);

                    return sendResponse (res,200,{message: "Logout successful."});
                    
                  } catch (error) {
                    
                    console.error(error);
                    return sendResponse(res,500,{error: "Internal Server Error"})

                  }

       }
   
}