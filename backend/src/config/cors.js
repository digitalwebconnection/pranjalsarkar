import cors from "cors";

const allowedOrigins = process.env.FRONTEND_URL
  ? process.env.FRONTEND_URL
      .split(",")
      .map(origin => origin.trim().replace(/\/$/, ""))
  : [];

const corsOptions = {

  origin(origin, callback) {

    // Allow Postman, Mobile Apps & Server-to-Server Requests
    if (!origin) {
      return callback(null, true);
    }

    const cleanOrigin = origin.replace(/\/$/, "");

    // Allow localhost only during development
    if (
      process.env.NODE_ENV !== "production" &&
      (
        cleanOrigin.startsWith("http://localhost:") ||
        cleanOrigin.startsWith("http://127.0.0.1:")
      )
    ) {
      return callback(null, true);
    }

    // Allow configured frontend(s)
    if (allowedOrigins.includes(cleanOrigin)) {
      return callback(null, true);
    }

    return callback(new Error("Origin not allowed by CORS"));

  },

  credentials: true,

  methods: [
    "GET",
    "POST",
    "PUT",
    "PATCH",
    "DELETE",
    "OPTIONS"
  ],

  allowedHeaders: [
    "Content-Type",
    "Authorization"
  ]

};

export default cors(corsOptions);