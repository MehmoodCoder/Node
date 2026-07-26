import express from "express";
import {
  GetAllUsersHTML,
  GetAllUsersJson,
  GetUserById,
  PatchUserById,
  DeleteUserById,
  PortUser,
} from "../controllers/user.js";

const router = express.Router();

// This is for Browser User

router.get("/", GetAllUsersHTML);

// Rest API

// They have same Route

router.route("/api").get(GetAlUsersJson).post(PortUser);

// router.get("/api", GetAlUsersJson);
// router.post("/api", PortUser);

// create route

router
  .route("/api/:id")
  .get(GetUserById)
  .patch(PatchUserById)
  .delete(DeleteUserById);

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

export default router;
