# Rules — Follow These On Every Task

These apply to every file you touch, every feature you build, every fix you make. If you're ever unsure which rule wins, prefer the simpler, safer, more explicit option.

> This file is the day-to-day distillation of `MERN_PRODUCTION_CHECKLIST.md` for this project's actual stack (Vite React SPA + Express/Mongoose + JWT admin auth, hosted on Vercel/Render). For anything not covered here in enough depth — Git workflow, full env-var matrix, API response conventions, SEO/sitemap, payments, VPS/Nginx deployment — check that file directly.

## 1. Security (non-negotiable)

- **Never** hardcode API keys, passwords, or secrets in code. Always use environment variables (`.env` file, never committed to git). Keep a `.env.example` with no real values, and set real values directly on Vercel/Render.
- Validate every piece of user input (forms, URLs, uploads) before using it — assume all input is hostile until checked.
- Never trust the frontend alone for permissions. Even if a button/route is hidden in the UI, the backend must independently check "is this person allowed to do this?" (`protectAdmin` middleware on every admin route, no exceptions).
- The admin credential is compared with `crypto.timingSafeEqual`, not `===`. If this ever moves to a stored/hashed credential, use bcrypt — never plain text.
- Never show raw error messages or stack traces to users — log the detail privately (via `logger.js`), show the user a simple friendly message. Use a centralized error-handling middleware so this is consistent everywhere.
- Rate limiting is mandatory on `/auth/login` and any public form endpoint (`/leads` contact submission) to prevent brute-force/spam.
- Sanitize input against NoSQL injection (`express-mongo-sanitize` or equivalent) on anything that reaches a Mongoose query.
- Never render user-submitted content as raw HTML (XSS).
- Helmet stays on with real security headers: `Content-Security-Policy`, `Strict-Transport-Security`, `X-Content-Type-Options`, `Referrer-Policy`.
- CORS must be restricted to the real production frontend domain(s) — never `origin: "*"` for the admin/leads API, and never leave a dev origin (`localhost`) enabled in the production build.
- Keep dependencies current — run `npm audit` and review findings before blindly using `--force`. Lock the Node version via `"engines"` in `package.json`.

## 2. Validation

- Never trust frontend validation alone — every form (lead capture, admin login) must be re-validated on the backend, even if the frontend already checked it.
- Prefer a schema validator (Zod/Joi/express-validator) over ad-hoc `if` checks for anything with more than 2-3 fields.
- Typical rules: required fields actually required, email in valid format, string lengths bounded, numeric fields actually numeric/positive.

## 3. Authentication & Authorization

- JWT for admin only, as designed: strong secret from env, short-ish expiration, never store sensitive data inside the JWT payload.
- Always verify the JWT server-side on every protected route — never trust a role or "isAdmin" flag sent from the frontend.
- Prefer HttpOnly Secure cookies for the token over exposing it to client-side JS where practical.
- Add rate limiting / basic lockout behavior on the login endpoint so it can't be brute-forced.

## 4. Code quality

- Write code a stranger could understand without asking you — clear names, small functions, no clever one-liners that are hard to read.
- No `any` type in TypeScript without a one-line comment explaining why.
- No `console.log` left in finished code — use `logger.js` in the backend for anything worth recording.
- Remove unused imports, unused variables, and dead/commented-out code before calling something done.
- Don't duplicate logic — if you're copy-pasting code with small tweaks, turn it into a shared function/component instead.
- Handle errors explicitly. Never leave an empty `catch` block that silently swallows a problem.

## 5. Error handling & logging

- Centralize error handling: Request → Route → Controller/handler → Error → global error handler → response. Don't scatter ad-hoc try/catch response shapes across routes.
- Structured logs only (`logger.js`), not raw `console.log`. Log requests, response status, errors, auth failures, and key business events (new lead, status change).
- Never log secrets: passwords, JWT secret, SMTP credentials, API keys.
- API error responses should follow a consistent shape, e.g. `{ "success": false, "message": "...", "errorCode": "..." }`, and use correct HTTP status codes (400/401/403/404/409/422/429/500) rather than always 200 or always 500.

## 6. Performance

- Don't guess at what's slow — check it (browser DevTools, Lighthouse) before "optimizing."
- Compress and lazy-load images; use modern formats (WebP) where possible. Heavy media lives in `frontend/public/`, never bundled into `src/`.
- Paginate anything that lists data — the leads table in the admin CRM must never fetch an unbounded list (`?page=1&limit=20` style).
- Avoid unnecessary re-renders and unnecessary API calls — cache/reuse data where sensible (e.g. don't refetch leads on every keystroke of a filter).
- Keep the initial page load lean — split large pages/routes so users don't download admin-panel code on the public landing page.
- Compress responses server-side (`compression` middleware) where applicable.

## 7. Accessibility & UX

- Use real HTML elements for their real purpose (`<button>` for buttons, not a styled `<div>`).
- Every input has a visible label — not just placeholder text.
- Every interactive element must work with keyboard alone (Tab + Enter), with a visible focus outline.
- Never use color as the only way to show meaning (e.g., pair red text with an actual error icon/message).
- Handle loading, error, empty, and success states for every screen that fetches data (especially the admin leads list) — never leave a blank screen while something loads.

## 8. Mobile & responsiveness

- Design mobile-first: build for a small screen, then expand up to desktop.
- Test every new page/feature at phone-sized widths (roughly 320–390px) before calling it done, in addition to tablet/desktop.
- Buttons and tappable areas should be big enough to tap comfortably (not tiny, cramped controls).
- Large tables (e.g. the admin leads table) must scroll horizontally on small screens rather than break the layout.

## 9. Database & data

- Every form of user data goes through validation before being saved.
- Add database indexes on fields you frequently search/filter/sort by (e.g. lead status, createdAt) — but check actual slow queries before over-indexing.
- Never delete or overwrite data without confirming that's actually the intent.
- Keep a plan for backups if this project stores real user data (leads are real user data — MongoDB Atlas automatic backups should be on).
- Never connect the app to a local/unmanaged MongoDB instance in production — Atlas only.

## 10. Deployment, environments & CORS

- Keep separate env vars for local vs. production (`MONGO_URI`, `JWT_SECRET`, `FRONTEND_URL`, SMTP creds) — never reuse a dev secret in production.
- Production CORS allows only the real deployed frontend origin(s) — remove any `localhost` origin before/at launch.
- HTTPS everywhere in production (Vercel/Render provide this by default — don't disable it).
- Don't run risky/destructive DB operations directly against the production database.

## 11. Monitoring, backups & maintenance

- Errors should surface somewhere you'll actually see them (Sentry is already wired via `config/sentry.js` — keep it configured, don't let it silently stop reporting).
- Have a documented recovery plan for the database — a production site without backups is a real risk, not a theoretical one.
- After any deploy, do a quick manual pass: main pages load, contact/lead form submits, email notification arrives, admin login works, admin panel loads leads, no console errors, no broken assets.

## 12. Before shipping anything

> "Before calling anything done, run `npm run check` in the relevant folder(backend/frontend) — don't rely on manually eyeballing the self-check list."

- No secrets in the code.
- No console errors in the browser.
- Actually tested in a running browser — not just "the code looks right."
- Works on both mobile and desktop.
- If you changed something existing, confirm you didn't break what was already working.

## 13. When something conflicts

If a request would violate one of the security rules above (e.g., "just hardcode the key for now"), say so clearly and explain the risk — then proceed only if I confirm I still want that.
