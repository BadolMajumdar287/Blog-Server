import express from "express";
import {config} from  "dotenv";
import cookieparser from "cookie-parser";
import { AdminController } from "./controller/admin.controller.js";
import { BlogController } from "./controller/blog.controller.js";
import { Databaseconfig } from "./config/mongoose.config.js";


config();
const PORT = process.env.PORT || 5000

const app = express();


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieparser());



app.use("/api/admin", AdminController);
app.use("/api/blog", BlogController);


Databaseconfig();

app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`);
})