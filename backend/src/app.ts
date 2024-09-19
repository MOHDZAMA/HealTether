import express, { Application } from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import connectDB from "./config/database";
import authRoutes from "./routes/auth";
import cookieParser from "cookie-parser";
import errorHandler from "./middleware/errorHandler";

dotenv.config();

// Initialize Express app
const app: Application = express();

// Connect to MongoDB
connectDB();

// CORS Configuration
const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

// Middleware
app.use(cors(corsOptions));
app.use(helmet());
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/auth", authRoutes);

// Global error handler
app.use(errorHandler); // Add error handling middleware last

export default app;
