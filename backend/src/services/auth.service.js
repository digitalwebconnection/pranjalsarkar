/**
 * Auth service — placeholder for future auth logic
 * (e.g., database-backed users, password hashing, refresh tokens).
 */

export const validateAdminCredentials = (email, password) => {
  const adminEmail = (process.env.ADMIN_EMAIL).toLowerCase();
  const adminPassword = process.env.ADMIN_PASSWORD;
  return email.toLowerCase() === adminEmail && password === adminPassword;
};
