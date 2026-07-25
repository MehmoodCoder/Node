import express from "express";
import fs from "fs";
import users from "./MOCK_DATA.json" with { type: "json" };

const app = express();
const port = 3000;

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

app.get("/users", (req, res) => {
  const html = `
        <ul>
            ${users.map((user) => `<li>${user.first_name} ${user.last_name}</li>`)}
        </ul>
    `;
  res.send(html);
});

// Rest API

app.get("/users/api", (req, res) => {
  //  console.log("i also Have ", req.my);
  //  res.setHeader("MyOwnCookie", "Babar is the King of Cricket")
  //  Good practices : add x or X- before custom header so we can write as & never add spaces btw wods and char in set header name it throughs error
  res.setHeader("X-MyOwnCookie", "Babar is the King of Cricket"); // better
  //   console.log(req.headers);

  res.status(200).json(users);
});

// create route

app
  .route("/users/api/:id")
  .get((req, res) => {
    // :id !== id, :id means variable id or dynamic id
    const id = req.params.id;
    const user = users.find((user) => user.id == id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ msg: "User not Found" });
    }
  })
  .patch((req, res) => {
    res.status(501).json({ status: "pending" });
  })
  .delete((req, res) => {
    const id = req.params.id;
    // const User = users.filter(user => user.id != id)

    // it needs server refresh so we use this way

    const userIndex = users.findIndex((user) => user.id == id);

    if (userIndex === -1) {
      return res
        .status(404)
        .json({ status: "Error", message: "User not found" });
    }

    users.splice(userIndex, 1);

    fs.writeFile(
      "./MOCK_DATA.json",
      JSON.stringify(users, null, 2),
      (error) => {
        if (!error) {
          res.status(200).json({ status: "deleted" });
        } else {
          res.status(404).json({ status: "pending" });
        }
      },
    );
  });

app.post("/users/api", (req, res) => {
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
  users.push({ id: users.length + 1, ...body });

  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users, null, 2), (error) => {
    if (!error) {
      res.status(201).json({ status: "success", id: `${users.length}` });
    } else {
      res.status(404).json({ status: "pending" });
    }
  });
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
