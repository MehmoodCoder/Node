import express from "express";
import path from 'path'
import cookieParser from "cookie-parser";

import dotenv from "dotenv";
dotenv.config();

import URLRoute from "./routes/url.js";
import StaticURLRoute from "./routes/static.js";
import UserRoute from './routes/user.js'

import ConnectDB from "./connect.js";

import { AuthorizationHeaderVal, RestrictTo } from "./middlewares/auth.js";

const app = express();
const port = process.env.PORT || 4000;

app.set("view engine", 'ejs')

app.set("views", path.resolve('./views'))

ConnectDB(process.env.MONGO_URL)
  .then(() => console.log("DB Connected Successfully"))
  .catch((err) => console.log("Error :", err));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use(AuthorizationHeaderVal);

app.use("/", StaticURLRoute);
app.use("/url", RestrictTo(['Normal', 'Admin']), URLRoute);
app.use("/user", UserRoute)


app.listen(port, () => console.log("Server Started at port ", port));
