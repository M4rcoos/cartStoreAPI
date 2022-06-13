import mongoose from "mongoose";

const Schema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
});

export const User = mongoose.model("User", Schema);
