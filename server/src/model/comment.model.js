import { model, Schema, Types } from "mongoose";


const CommentSchema = new Schema({

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

    comment : {
        type: String,
    required: true,
    } 

},{
    timestamps: true,
})

export const CommentModel = model("comments",CommentSchema);
