import { config } from "dotenv";
import {connect} from "mongoose";


config();
const MONGODB_URL = process.env.MONGODB_URL 


export const Databaseconfig = async () => {
     
       try {

          const connection =await connect(MONGODB_URL);
         
          const db = connection.connection;

          const {host,name,port} = db;

          console.log(` Database Connected Successfully ✅ \n Host Name = ${host} \n Database Name = ${name} \n Port Name = ${port}`);

       } catch (error) {
        
        console.error("Database connection failed:",error);
        process.exit(1);


       }
  
}


