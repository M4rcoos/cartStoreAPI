import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import routes from "./routes/index.js";
import env from "dotenv";

env.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

process.env.MONGO_URI;

async function connect() {
  await mongoose.connect(process.env.MONGO_URI);
}

connect();
app.listen(3333, () => {
  console.log("Server listening on port 3333 🚀");
});
