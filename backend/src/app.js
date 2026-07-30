import express from "express";

import { initSentry, Sentry } from "./config/sentry.js";
import corsMiddleware from "./config/cors.js";

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
// API Routes
// ===============================

import authRoutes from "./routes/auth.js";
import leadRoutes from "./routes/leads.js";

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


export default app;
