import { model,Schema, Types } from "mongoose";


const BlogSchema = new Schema({

         
         adminId: {
            type : Types.ObjectId,
            ref: "admins",
            required: true,
         },

         advator: {
            type: Array,
            required: true,
         },


        title: {
            type: String,
             required: true,
         },

        content: {
             type: String,
             required: true,
        },


},
{
    timestamps: true,
})



export const BlogModel = model("blogs",BlogSchema);