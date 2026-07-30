# Deployment Guide

## Prerequisites

- Node.js 18+
- MongoDB Atlas account (or local MongoDB)
- Vercel account (frontend)
- Render / Railway account (backend)

## Backend Deployment (Render)

1. **Create a new Web Service** on [Render](https://render.com).
2. **Connect your GitHub repo** and set the root directory to `backend/`.
3. **Build command**: `npm ci --omit=dev`
4. **Start command**: `node server.js`
5. **Environment variables** — set all values from `backend/.env.example`:
   - `MONGODB_URI` — your MongoDB Atlas connection string
   - `JWT_SECRET` — a strong random secret
   - `FRONTEND_URL` — your deployed frontend URL
   - `EMAIL_USER`, `EMAIL_PASS` — Gmail SMTP credentials
   - `INTERNAL_NOTIFICATION_EMAIL` — admin notification email
   - `SENTRY_DSN` — (optional) Sentry error tracking

## Frontend Deployment (Vercel)

1. **Import project** on [Vercel](https://vercel.com).
2. **Set root directory** to `frontend/`.
3. **Framework preset**: Vite
4. **Environment variables**:
   - `VITE_API_URL` — your deployed backend URL (e.g., `https://your-app.onrender.com`)
5. The `vercel.json` already handles SPA routing rewrites.

## Docker Deployment

```bash
cd docker
docker compose up --build -d
```

This starts:
- **Backend** on port 5000
- **Frontend** on port 3000
- **MongoDB** on port 27017

## Environment Variables Checklist

| Variable                      | Required | Where    |
| ----------------------------- | -------- | -------- |
| `MONGODB_URI`                 | ✅       | Backend  |
| `JWT_SECRET`                  | ✅       | Backend  |
| `FRONTEND_URL`                | ✅       | Backend  |
| `PORT`                        | Optional | Backend  |
| `EMAIL_USER`                  | ✅       | Backend  |
| `EMAIL_PASS`                  | ✅       | Backend  |
| `INTERNAL_NOTIFICATION_EMAIL` | ✅       | Backend  |
| `SENTRY_DSN`                  | Optional | Backend  |
| `VITE_API_URL`                | ✅       | Frontend |
