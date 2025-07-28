import { model,Schema,Types } from "mongoose";


const LikeSchema = new Schema({
   
      adminId : {
              type: Types.ObjectId,
               ref: "admins",
              },
      
       userId : {
              type: Types.ObjectId,
               ref: "users",
       
              },

        Like : {
             type: Boolean,
          default: false,
        required : true,
        }

},
{
    timestamps: true,
});



export const LikeModel = model("likes",LikeSchema);
