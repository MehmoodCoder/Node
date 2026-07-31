import express from "express";
import path from 'path'
import cookieParser from "cookie-parser";

import URLRoute from "./routes/url.js";
import StaticURLRoute from "./routes/static.js";
import UserRoute from './routes/user.js'

import ConnectDB from "./connect.js";

import { checkAuth, LoggedInUsersOnly } from "./middlewares/auth.js";

const app = express();
const port = 4000;

app.set("view engine", 'ejs')

app.set("views", path.resolve('./views'))

ConnectDB("mongodb://127.0.0.1:27017/short-url")
  .then(() => console.log("DB Connected Successfully"))
  .catch((err) => console.log("Error :", err));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

app.use("/", checkAuth, StaticURLRoute);
app.use("/url", LoggedInUsersOnly, URLRoute);
app.use("/user", UserRoute)


app.listen(port, () => console.log("Server Started at port ", port));
