import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import dns from "node:dns";

dns.setDefaultResultOrder("ipv4first");

dotenv.config();

import URLRoute from "./routes/url.js";
import StaticURLRoute from "./routes/static.js";
import UserRoute from "./routes/user.js";
import ConnectDB from "./connect.js";
import { AuthorizationHeaderVal, RestrictTo } from "./middlewares/auth.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 4000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(async (req, res, next) => {
  try {
    await ConnectDB(process.env.MONGO_URL);
    next();
  } catch (error) {
    console.error("Database connection failure:", error);
    res.status(500).send("Database Connection Failed");
  }
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use(AuthorizationHeaderVal);

app.use("/", StaticURLRoute);
app.use("/url", RestrictTo(["Normal", "Admin"]), URLRoute);
app.use("/user", UserRoute);

if (process.env.NODE_ENV !== "production") {
  app.listen(port, () => console.log("Server Started at port ", port));
}

export default app;