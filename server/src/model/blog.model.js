import { model,Schema, Types } from "mongoose";


const BlogSchema = new Schema({

         adminId: {
            type : Types.ObjectId,
            ref: "admin",
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



export const BlogModel = model("blog",BlogSchema);