import express from "express";
import dotenv from "dotenv";

import { initSentry, Sentry } from "./src/config/sentry.js";
import connectDB from "./src/config/db.js";
import corsMiddleware from "./src/config/cors.js";

import authRoutes from "./src/routes/auth.js";
import leadRoutes from "./src/routes/leads.js";

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

app.use(corsMiddleware);

app.use(express.json());

app.use(express.urlencoded({ extended: true }));


// ===============================
// Database Connection
// ===============================

connectDB();


// ===============================
// API Routes
// ===============================

app.use("/api/auth", authRoutes);

app.use("/api/leads", leadRoutes);


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

  console.error(err);

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

  console.log(`🚀 Server running on port ${PORT}`);

});