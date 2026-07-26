import express from "express";
import fs from "fs";
// import users from "./MOCK_DATA.json" with { type: "json" };
import mongoose from "mongoose";

const app = express();
const port = 3000;

// connect with DB

mongoose
  .connect("mongodb://127.0.0.1:27017/my-first-db")
  .then(() => console.log("DB is connected Successfully"))
  .catch((e) => console.log("DB Error : ", e));

/* 

// 1. Display all available databases on the MongoDB server
show dbs

// 2. Switch the active context to a specific database (or create it if it doesn't exist)
use admin

// 3. List all collections (tables) inside the currently active database
show collections

// 4. Query and retrieve all documents (records) from a specified collection
db.collection_name.find({})

// 1. Create and switch to a new database (database is physically created once data is inserted)
use myNewDatabase

// 2. Insert a single document (record) into a collection
db.users.insertOne({ name: "Mehmood", role: "Developer" })

// 3. Insert multiple documents into a collection at once using an array
db.users.insertMany([{ name: "Ali", age: 22 }, { name: "Sara", age: 24 }])

// 4. Retrieve and view all inserted documents in the collection
db.users.find()

// 5. Retrieve all documents with readable indenting/formatting
db.users.find().pretty()

// 5. Exit the interactive MongoDB Shell session and return to the system terminal
.exit

*/

/*
 * NOTE: Development Server Setup
 * Installed 'nodemon' (npm i nodemon) for hot-reloading on code changes.
 *
 * Package.json script configuration:
 * "scripts": {
 *   "start": "nodemon index.js"
 * }
 */

// Dev Tooling: Installed nodemon to auto-restart server on code changes.
// Configured "start": "nodemon index.js" in package.json scripts.

// Middle ware - Plugin

app.use(express.urlencoded({ extended: false }));

// Middleware

app.use((req, res, next) => {
  //   console.log("Hello From MiddleWare 1");
  req.my = "myMind";
  next();
});

app.use((req, res, next) => {
  //   console.log("Hello From MiddleWare 2", req.my);
  next();
});


app.listen(port, () => console.log(`Server is started on ${port}`));
