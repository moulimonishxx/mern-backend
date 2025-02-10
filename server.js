import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRouter from "./routes/auth.js";
import usersRouter from "./routes/users.js"; // Import users route
import { connectDB } from "./config/db.js";

dotenv.config();

const app = express();

connectDB();

app.use(express.json());
app.use(cors());

// Routes
app.use("/api/auth", authRouter);
app.use("/api/users", usersRouter); // Add users route

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
