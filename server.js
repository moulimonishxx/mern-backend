// backend/server.js

import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRouter from "./routes/auth.js";
import { connectDB } from "./config/db.js";

dotenv.config();

// Create express app
const app = express();

// Connect to the database
connectDB();

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/auth", authRouter);

// Starting the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
