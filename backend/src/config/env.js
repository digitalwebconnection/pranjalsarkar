const requiredEnv = [
  "MONGODB_URI",
  "JWT_SECRET",
  "FRONTEND_URL",
  "ADMIN_EMAIL",
  "ADMIN_PASSWORD"
];

requiredEnv.forEach((key) => {

  if (!process.env[key]) {

    throw new Error(`Missing required environment variable: ${key}`);

  }

});