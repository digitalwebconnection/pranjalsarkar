# Rules — Follow These On Every Task

These apply to every file you touch, every feature you build, every fix you make. If you're ever unsure which rule wins, prefer the simpler, safer, more explicit option.

## 1. Security (non-negotiable)

- **Never** hardcode API keys, passwords, or secrets in code. Always use environment variables (`.env` file, never committed to git).
- Validate every piece of user input (forms, URLs, uploads) before using it — assume all input is hostile until checked.
- Never trust the frontend alone for permissions. Even if a button is hidden in the UI, the backend must independently check "is this person allowed to do this?"
- Passwords must be hashed (never stored as plain text) — use a proper auth provider (Supabase Auth, Clerk, NextAuth) instead of building your own.
- Never show raw error messages/stack traces to users — log the detail privately, show the user a simple friendly message.
- Add rate limiting to login, signup, and password-reset endpoints so they can't be spammed.

## 2. Code quality

- Write code a stranger could understand without asking you — clear names, small functions, no clever one-liners that are hard to read.
- No `any` type in TypeScript without a one-line comment explaining why.
- No `console.log` left in finished code.
- Remove unused imports, unused variables, and dead/commented-out code before calling something done.
- Don't duplicate logic — if you're copy-pasting code with small tweaks, turn it into a shared function/component instead.
- Handle errors explicitly. Never leave an empty `catch` block that silently swallows a problem.

## 3. Performance

- Don't guess at what's slow — check it (browser DevTools, Lighthouse) before "optimizing."
- Compress and lazy-load images; use modern formats (WebP) where possible.
- Paginate anything that lists data — never load an unlimited, unbounded list.
- Avoid unnecessary re-renders and unnecessary API calls — cache/reuse data where sensible.
- Keep the initial page load lean — split large pages so users don't download code they don't need yet.

## 4. Accessibility & UX

- Use real HTML elements for their real purpose (`<button>` for buttons, not a styled `<div>`).
- Every input has a visible label — not just placeholder text.
- Every interactive element must work with keyboard alone (Tab + Enter), with a visible focus outline.
- Never use color as the only way to show meaning (e.g., pair red text with an actual error icon/message).
- Handle loading, error, empty, and success states for every screen that fetches data — never leave a blank screen while something loads.

## 5. Mobile & responsiveness

- Design mobile-first: build for a small screen, then expand up to desktop.
- Test every new page/feature at a phone-sized width before calling it done.
- Buttons and tappable areas should be big enough to tap comfortably (not tiny, cramped controls).

## 6. Database & data

- Every form of user data goes through validation before being saved.
- Add database indexes on fields you frequently search/filter/sort by.
- Never delete or overwrite data without confirming that's actually the intent.
- Keep a plan for backups if this project stores real user data.

## 7. Before shipping anything

- No secrets in the code.
- No console errors in the browser.
- Actually tested in a running browser — not just "the code looks right."
- Works on both mobile and desktop.
- If you changed something existing, confirm you didn't break what was already working.

## 8. When something conflicts

If a request would violate one of the security rules above (e.g., "just hardcode the key for now"), say so clearly and explain the risk — then proceed only if I confirm I still want that.
