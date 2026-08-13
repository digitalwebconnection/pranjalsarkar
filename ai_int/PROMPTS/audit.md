# Use this when: about to launch/deploy, or doing a periodic full health check

Read `RULES.md` first (and `MERN_PRODUCTION_CHECKLIST.md` §28-29 if you want the unabridged version of the checks below).

Pretend this project is going live today. Review the whole thing like a senior engineer doing a final pre-launch check.

## Check every one of these areas and report Pass / Issue Found (with fix) for each:

1. **Security** — exposed secrets, unvalidated input, missing auth/permission checks, weak passwords handling, exposed error details, CORS not locked to the production domain, missing rate limiting on login/contact-form endpoints.
2. **Performance** — slow-loading pages, unoptimized images, unbounded data lists (check the admin leads table has pagination), unnecessary large dependencies.
3. **Bugs & edge cases** — empty input, huge input, no internet, double-clicking a button, refreshing mid-action.
4. **Mobile & responsiveness** — actually check it at phone width (320-390px), not just "should be fine."
5. **Accessibility** — keyboard navigation, labels on forms, color-only indicators.
6. **Code quality** — dead code, unused imports, leftover console.logs, duplicated logic.
7. **SEO** (only for public pages, skip for private/admin areas) — page titles, descriptions, alt text on images.

## Pre-launch smoke test (do this yourself in the browser, right before/after deploying)

- [ ] Every main page on the landing page loads
- [ ] Admin login / logout works
- [ ] Lead submission form on the landing page submits successfully
- [ ] Lead notification email actually arrives (internal notification + any mentee welcome email)
- [ ] Core API endpoints respond correctly (leads list, lead status update, auth)
- [ ] SSL/HTTPS is valid on both frontend and backend URLs
- [ ] 404 and error states are handled gracefully, not a blank page or raw stack trace
- [ ] Test failed/invalid requests too, not just the happy path (bad email, missing field, expired/invalid JWT)
- [ ] Basic DB operation confirmed working end-to-end (a submitted lead actually appears in the admin panel)
- [ ] Admin panel — filtering, status updates (NEW → QUALIFIED → OPPORTUNITY → CONVERTED) all work
- [ ] Tested on an actual mobile-width viewport, not just resized desktop
- [ ] Browser console is clean — no errors
- [ ] Network tab is clean — no failed/unexpected requests
- [ ] Server/Render logs are clean after the smoke test

## Final security questions — answer each explicitly

- [ ] Can a normal (non-admin) visitor reach any admin API route directly?
- [ ] Can anyone read or modify a lead's data without a valid admin JWT?
- [ ] Is the admin credential compared safely (`crypto.timingSafeEqual`), not with `===`?
- [ ] Can the admin login be brute-forced (no rate limit)?
- [ ] Are secrets exposed anywhere — client bundle, git history, logs, Sentry breadcrumbs?
- [ ] Is CORS restricted to the real production frontend origin only (no `*`, no leftover `localhost`)?
- [ ] Is MongoDB Atlas access properly restricted (IP allowlist / network access), not open to the public internet?
- [ ] Are all `/api` routes appropriately rate-limited, not just login?
- [ ] Is the JWT validated server-side on every single protected route, with no route accidentally left unprotected?

**If the answer reveals a real vulnerability — fix before going live, don't ship around it.**

## Output format

Give me:
- **Overall verdict**: Ready / Ready with caveats / Not ready
- **Critical issues** (must fix before launch)
- **Nice-to-fix issues** (can wait)
- **What's already solid** (don't just list problems — tell me what's good too)

Then wait for me to say "fix the critical ones" before you start changing code. Fix one at a time, and re-test each in the browser before moving to the next.
