import { model,Schema } from "mongoose";


const AdminSchema = new Schema({

      firstname: {
        type: String,
        required:true, 
      },

      lastname: {
        type: String,
        required:true,
      },

      fullname: {
        type: String,
        required: true,
      },

      email:{
        type: String,
        required:true,
        unique: true,
      },

      password: {
        type: String,
        required: true,
      }



},
{
    timestamps: true,
}
);


export const Adminmodel = model("admins",AdminSchema);