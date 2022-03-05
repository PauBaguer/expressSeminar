import express from "express";
import mongoose from "mongoose";
import trackRouter from "./routes/tracks.js";
import userRouter from "./routes/users.js";
import logger from "morgan";

const app = express();
const PORT = 8080;

app.use(logger("dev"));
app.use(express.json());
app.use(express.static("public"));
app.use("/track", trackRouter);
app.use("/user", userRouter);

let db = mongoose.connection;
db.on("error", () => console.log("MONGODB CONNECTION ERROR"));
db.once("open", () => console.log("MONGODB CONNECTION OPEN"));
await mongoose.connect("mongodb://localhost:27017/test");

app.listen(PORT, () => console.log(`listening on ${PORT}`));
