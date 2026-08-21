import express from "express";
import helmet from "helmet";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import logger from "./src/utils/logger.js";

import { initSentry, Sentry } from "./src/config/sentry.js";
import connectDB from "./src/config/db.js";
import corsMiddleware from "./src/config/cors.js";

import authRoutes from "./src/routes/auth.js";
import leadRoutes from "./src/routes/leads.js";
import userRoutes from "./src/routes/users.js";

// Load Environment Variables
dotenv.config();

// Validate Required Environment Variables
import "./src/config/env.js";

// Initialize Sentry
initSentry();

const app = express();


// ===============================
// Middlewares
// ===============================

app.use(helmet());
app.use(cookieParser());

app.use(corsMiddleware);

app.use(express.json({ limit: '10kb' }));

app.use(express.urlencoded({ extended: true, limit: '10kb' }));


// ===============================
// Database Connection
// ===============================

connectDB();


// ===============================
// API Routes
// ===============================

app.use("/api/auth", authRoutes);

app.use("/api/leads", leadRoutes);

app.use("/api/users", userRoutes);


// ===============================
// Root Route
// ===============================

app.get("/", (req, res) => {

  res.send("CRM API is running.");

});


// ===============================
// Sentry Error Handler
// ===============================

Sentry.setupExpressErrorHandler(app);


// ===============================
// Global Error Handler
// ===============================

app.use((err, req, res, next) => {

  logger.error(err);

  res.status(err.status || 500).json({

    success: false,

    message:
      process.env.NODE_ENV === "production"
        ? "Internal Server Error"
        : err.message

  });

});


// ===============================
// Start Server
// ===============================

const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {

  logger.info(`🚀 Server running on port ${PORT}`);

});