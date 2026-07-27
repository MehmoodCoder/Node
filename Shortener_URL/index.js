import express from "express";
import URLRoute from "./routes/url.js";
import ConnectDB from "./connect.js";

const app = express();
const port = 4000;

ConnectDB("mongodb://127.0.0.1:27017/short-url")
  .then(() => console.log("DB Connected Successfully"))
  .catch((err) => console.log("Error :", err));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/url", URLRoute);

app.listen(port, () => console.log("Server Started at port ", port));
