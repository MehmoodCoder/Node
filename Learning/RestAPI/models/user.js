import mongoose from "mongoose";

// Schema


const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  gender: {
    type: String,
  },
  jobtitle: {
    type: String,
    required: true,
  },
}, { timestamps : true });


// Model of Schema

const User = mongoose.model("user", userSchema);

export default User