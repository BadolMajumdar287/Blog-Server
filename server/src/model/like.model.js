import { model,Schema,Types } from "mongoose";


const LikeSchema = new Schema({
   
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

        like : {
             type: Boolean,
          default: false,
          
        }

},
{
    timestamps: true,
});



export const LikeModel = model("likes",LikeSchema);
