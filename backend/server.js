import express from "express";
import cors from "cors";
import connectDB from "./config/dbconfig.js"; // Corrected the import path
import userRoute from './routes/userRoute.js';

const app = express();

connectDB();

app.use(express.json());
app.use(cors());

app.use("/api/v1/user", userRoute); 

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
