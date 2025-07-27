import express from "express";
import cors from "cors";
import {config} from  "dotenv";
import cookieparser from "cookie-parser";
import { AdminRouter } from "./router/admin.router.js";
import { BlogRouter } from "./router/blog.router.js";
import { Databaseconfig } from "./config/mongoose.config.js";
import { CommentRouter } from "./router/comment.router.js";
import { AuthRouter } from "./router/auth.router.js";



config();
const PORT = process.env.PORT || 5000;

const app = express();


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieparser());
app.use(express.static("./public"));




app.use(cors({
    origin: ["http://localhost:3000", "http://192.168.100.191:3000"],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
}));



app.use("/api/admin", AdminRouter);
app.use("/api/blog", BlogRouter);
app.use("/api/user", AuthRouter);
app.use("/api/comment",CommentRouter);


Databaseconfig();

app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`);
})
