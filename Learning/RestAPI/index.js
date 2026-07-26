import express from "express";
import fs from "fs";
// import users from "./MOCK_DATA.json" with { type: "json" };
import mongoose from "mongoose";
import { timeStamp } from "console";
import { allowedNodeEnvironmentFlags } from "process";

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

// This is for Browser User

app.get("/users", async (req, res) => {
  const allDBUsers = await User.find({})
  const html = `
        <ul>
            ${allDBUsers.map((user) => `<li>${user.firstName} ${user.lastName} - ${user.email}</li>`)}
        </ul>
    `;
  res.send(html);
});

// Rest API

app.get("/users/api", async (req, res) => {
  //  console.log("i also Have ", req.my);
  //  res.setHeader("MyOwnCookie", "Babar is the King of Cricket")
  //  Good practices : add x or X- before custom header so we can write as & never add spaces btw wods and char in set header name it throughs error
  res.setHeader("X-MyOwnCookie", "Babar is the King of Cricket"); // better
  //   console.log(req.headers);

  const allDBUsers = await User.find({})

  res.status(200).json(allDBUsers);
});

// create route

app
  .route("/users/api/:id")
  .get( async (req, res) => {

    // :id !== id, :id means variable id or dynamic id

    // const id = req.params.id;
    // const user = users.find((user) => user.id == id);

    const user = await User.findById(req.params.id)

    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ msg: "User not Found" });
    }
  })
  .patch( async (req, res) => {

    await User.findByIdAndUpdate(req.params.id, { lastName : "Changed"})

    res.status(200).json({ status: "success" });
  })
  .delete(async (req, res) => {
    const id = req.params.id;

    if (!id) {
      return res.status(404).json(id, "not found")
    }

    await User.findByIdAndDelete(id)
    res.status(200).json({msg: "Deleted"})

    // const User = users.filter(user => user.id != id)

    // it needs server refresh so we use this way

    // const userIndex = users.findIndex((user) => user.id == id);

    // if (userIndex === -1) {
    //   return res
    //     .status(404)
    //     .json({ status: "Error", message: "User not found" });
    // }

    // users.splice(userIndex, 1);

    // fs.writeFile(
    //   "./MOCK_DATA.json",
    // JSON.stringify(users, null, 2),
    //   (error) => {
    //     if (!error) {
    //       res.status(200).json({ status: "deleted" });
    //     } else {
    //       res.status(404).json({ status: "pending" });
    //     }
    //   },
    // );
  });

app.post("/users/api", async (req, res) => {
  const body = req.body;
  console.log(body);
  if (
    !body ||
    !body.first_name ||
    !body.last_name ||
    !body.job_title ||
    !body.email ||
    !body.gender
  ) {
    return res.status(400).json({ Message: "Field(s) missing" });
  }
  // now we use DB instead of

  const result = await User.create({
    firstName : body.first_name,
    lastName : body.last_name,
    email: body.email,
    gender: body.gender,
    jobtitle: body.job_title,
  })

  console.log(result , "---");
  
  res.status(201).json({msg: 'success'})

  // users.push({ id: users.length + 1, ...body });

  // fs.writeFile("./MOCK_DATA.json", JSON.stringify(users, null, 2), (error) => {
  //   if (!error) {
  //     res.status(201).json({ status: "success", id: `${users.length}` });
  //   } else {
  //     res.status(404).json({ status: "pending" });
  //   }
  // });
});

// instead of it

// app.get("/users/api/:id", (req, res) => {
//   // :id !== id, :id means variable id or dynamic id
//   const id = req.params.id;
//   const user = users.find((user) => user.id == id);
//   res.json(user);
// });

// app.patch("/users/api/:id", (req, res) => {
//     res.json({status: 'pending'})
// })

// app.delete("/users/api/:id", (req, res) => {
//     res.json({status: 'pending'})
// })

// Now install Postman from postman.com to test delete, post, patch

app.listen(port, () => console.log(`Server is started on ${port}`));
