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
  },
  { timestamps: true },
);

const URLModel = mongoose.model("url", URLSchema);

export default URLModel;
