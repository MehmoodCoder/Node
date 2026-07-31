import mongoose from "mongoose";

const URLSchema = new mongoose.Schema(
  {
    shortID: {
      type: String,
      unique: true,
    },
    redirectURL: {
      required: true,
      type: String,
    },
    visitHistory: [{ timestamp: { type: Date, default: Date.now } }],
    createdBy:{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users',
    }
  },
  { timestamps: true },
);

const URLModel = mongoose.model("url", URLSchema);

export default URLModel;
