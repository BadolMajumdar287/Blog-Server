import { model,Schema,Types } from "mongoose";


const CommentLikeSchema = new Schema({
   
     adminId : {
         type: Types.ObjectId,
         ref: "admins"
     },

     userId : {
        type: Types.ObjectId,
        ref : "users"
     },

     blogId : {
        type: Types.ObjectId,
        ref : "blogs",
   required : true
     },

  commentId : {
       type : Types.ObjectId,
        ref : "comments",
   required : true
     },

       like : {
       type : Boolean,
    default : false
       }


},
{
timestamps: true,
})


export const CommentLikeModel = model("commentlikes",CommentLikeSchema)