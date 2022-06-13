import mongoose from "mongoose";
import { User } from "./User.js";

const Schema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  productDescription: {
    type: String,
  },
  productPrice: {
    type: Number,
    required: true,
  },
  productQuantity: {
    type: Number,
    required: true,
  },
  productImage: {
    type: String,
  },
  username: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User,
    required: true,
  },
});

export const Product = mongoose.model("Product", Schema);
