import cors from "cors";
import mongoose from "mongoose";
import express from "express";
import { userRouter } from "./routes/user.js";
import { postRouter } from "./routes/post.js";
const app = express();
const PORT = 8001;

app.use(express.json());
const corsOptions = {
  origin: "http://localhost:3000", // Update with the correct origin
};

app.use(cors(corsOptions));

app.use("/auth", userRouter);
app.use("/auth", postRouter);

mongoose.connect(
  "mongodb+srv://jalter314:413@test.ciassen.mongodb.net/test?retryWrites=true&w=majority"
);

app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`);
});
