# Project Info

## What this project is

**AI Product Leadership Studio (AIPLS) — Pranjal Sarkar** — A highly selective, live cohort program for senior PMs, EMs, and growth leads transitioning to Director and Head of Product roles. 
The system consists of two parts:
1. **Marketing Landing Page:** A premium, dynamic, mobile-responsive single-page application (SPA) that acts as a sales letter and captures leads.
2. **Admin CRM Panel:** A protected dashboard (`/admin`) to manage, filter, and progress applicant leads through a sales funnel (NEW -> QUALIFIED -> OPPORTUNITY -> CONVERTED), with automated email notifications.

## Tech stack

- **Frontend:** React 18 + TypeScript + Vite + Tailwind CSS + React Router
  - Extras: Lucide React (icons), SmoothScroll components.
- **Backend:** Node.js + Express (ESM / `type: module`)
- **Database:** MongoDB via Mongoose (Lead model)
- **Auth:** JWT-based for Admin only. Uses a single admin credential pair managed via environment variables (no user accounts database table, uses `crypto.timingSafeEqual` for security).
- **File storage:** All heavy media (images, videos) are served from the frontend's `public/` directory for optimal performance.
- **Email:** Nodemailer (Gmail SMTP) — used for internal lead notifications and mentee welcome emails.
- **Security:** Helmet, CORS, custom rate limiters.
- **Hosting:** Frontend on Vercel, Backend on Render.

## Folder structure

```
backend/
  src/
    config/        → db.js, sentry.js
    middleware/    → auth.js (protectAdmin JWT check), rateLimiter.js
    models/        → Lead.js (Mongoose schema)
    routes/        → auth.js, leads.js (route + logic combined)
    utils/         → sendEmail.js (SMTP notifications), logger.js, security.js
  server.js        → Express app entrypoint, CORS config, DB connect, route mounting

frontend/
  public/          → Heavy assets (videos, gallery photos)
  src/
    admin/         → Admin panel features (AdminPage, LeadsTab, Login)
    api/           → HTTP client and API URL config
    components/    → shared UI:
      layout/      → Navbar, Footer
      sections/    → Hero, About, Program, Contact (the landing page sections)
    hooks/         → useLeads.ts (React state for CRM data fetching)
    styles/        → index.css (Tailwind)
    types.ts       → TypeScript interfaces
  App.tsx          → Main router (LandingPage vs /admin)
```

## Design system

- **Style:** Clean, premium, authoritative. Deep blacks (`#000001`), subtle blue glows, and glassmorphism.
- **Typography:** Sans-serif (`Inter`, `Outfit`) for modern UI elements, and a serif font for strong, authoritative headers.
- **Core Colors:** Deep space background (`#000001`), vibrant blue/indigo gradients (`from-[#0080C7] to-[rgba(24,37,226,0.9)]`). 
- **Responsiveness:** Must be strictly mobile-first. UI elements like large tables (admin) must scroll horizontally on small screens.

## What "done" means for this project

A feature isn't done until:
- It works correctly, including edge cases (empty input, no internet, wrong input).
- It's been tested in the actual browser, not just assumed to work.
- It's secure — **especially: no secrets committed to version control, ever.**
- It follows strict Accessibility (A11Y) rules (labels on inputs, alt on images).
- Performance is preserved (don't bundle huge images in `src/`).
- Code is clean, DRY, and logs use the structured `logger.js` (no raw `console.log` in backend).
