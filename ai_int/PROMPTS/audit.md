# Use this when: about to launch/deploy, or doing a periodic full health check

Read `RULES.md` first.

Pretend this project is going live today. Review the whole thing like a senior engineer doing a final pre-launch check.

## Check every one of these areas and report Pass / Issue Found (with fix) for each:

1. **Security** — exposed secrets, unvalidated input, missing auth/permission checks, weak passwords handling, exposed error details.
2. **Performance** — slow-loading pages, unoptimized images, unbounded data lists, unnecessary large dependencies.
3. **Bugs & edge cases** — empty input, huge input, no internet, double-clicking a button, refreshing mid-action.
4. **Mobile & responsiveness** — actually check it at phone width, not just "should be fine."
5. **Accessibility** — keyboard navigation, labels on forms, color-only indicators.
6. **Code quality** — dead code, unused imports, leftover console.logs, duplicated logic.
7. **SEO** (only for public pages, skip for private/admin areas) — page titles, descriptions, alt text on images.

## Output format

Give me:
- **Overall verdict**: Ready / Ready with caveats / Not ready
- **Critical issues** (must fix before launch)
- **Nice-to-fix issues** (can wait)
- **What's already solid** (don't just list problems — tell me what's good too)

Then wait for me to say "fix the critical ones" before you start changing code. Fix one at a time, and re-test each in the browser before moving to the next.
