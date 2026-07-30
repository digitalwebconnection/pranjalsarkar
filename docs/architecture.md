# Architecture

## Overview

The project follows a classic **client–server** architecture with a React SPA frontend and an Express.js REST API backend, connected to MongoDB.

```
┌──────────────┐     HTTPS/REST     ┌──────────────┐      Mongoose      ┌──────────────┐
│   Frontend   │  ───────────────►  │   Backend    │  ───────────────►  │   MongoDB    │
│  (React/Vite)│  ◄───────────────  │  (Express)   │  ◄───────────────  │  (Atlas)     │
└──────────────┘                    └──────────────┘                    └──────────────┘
     Vercel                             Render
```

## Frontend

- **Framework**: React 18 + TypeScript
- **Bundler**: Vite
- **Routing**: React Router v6
- **Styling**: Vanilla CSS with custom properties
- **Animations**: Framer Motion / Motion
- **Deployment**: Vercel

### Key directories

| Directory       | Purpose                                   |
| --------------- | ----------------------------------------- |
| `components/`   | Reusable UI components (layout, sections) |
| `admin/`        | Admin panel (self-contained feature)      |
| `api/`          | HTTP client + endpoint wrappers           |
| `context/`      | React context providers                   |
| `hooks/`        | Custom React hooks                        |
| `pages/`        | Page-level route components               |
| `routes/`       | Route definitions (AppRoutes)             |

## Backend

- **Runtime**: Node.js 18+
- **Framework**: Express.js (ESM)
- **Database**: MongoDB via Mongoose
- **Auth**: JWT (single admin)
- **Email**: Nodemailer (Gmail SMTP)
- **Monitoring**: Sentry
- **Deployment**: Render

### Key directories

| Directory       | Purpose                                |
| --------------- | -------------------------------------- |
| `config/`       | DB, CORS, Sentry, env validation       |
| `controllers/`  | Route handler logic (thin controllers) |
| `services/`     | Business logic layer                   |
| `models/`       | Mongoose schemas                       |
| `middleware/`    | Auth, error handling, rate limiting    |
| `validators/`   | Request validation schemas             |
| `errors/`       | Custom error classes and codes         |
| `jobs/`         | Background / scheduled tasks           |
| `upload/`       | File upload configuration              |

## Data Flow

1. User submits lead form → `POST /api/leads`
2. Backend validates, creates Lead document in MongoDB
3. Notification email sent to admin (non-blocking)
4. Admin logs in at `/admin` → JWT issued via `POST /api/auth/login`
5. Admin manages leads through the CRM funnel
6. On CONVERTED status → confirmation email to mentee
