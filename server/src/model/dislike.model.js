import { model,Schema,Types } from "mongoose";


const DislikeSchema = new Schema({
   
        blogId  : {
           type : Types.ObjectId,
            ref : "blogs",
       required : true 

                 },
        adminId : {
            type: Types.ObjectId,
             ref: "admins",
                 },
          
         userId : {
            type: Types.ObjectId,
             ref: "users",
           
                  },
    
         dislike : {
             type: Boolean,
          default: false,
        required : true,
            }


},{
    timestamps:true,
})


export const DislikeModel = model("dislikes",DislikeSchema);