# Use this when: reviewing or cleaning up existing code

Read `RULES.md` first if you haven't already this session.

## Steps to follow

1. **Report first, don't change anything yet.** Go through the code (or the specific area I point you to) and list every issue you find, organized as:
   - **Security issues** (exposed secrets, missing validation, missing permission checks)
   - **Bugs** (things that look wrong or could break)
   - **Performance issues** (slow patterns, unbounded lists, huge images)
   - **Messy code** (duplicated logic, dead code, unclear naming, leftover console.logs)
   - **Accessibility/mobile issues** (missing labels, unusable on small screens)
2. **Wait for my go-ahead** on what to fix — don't fix everything automatically unless I say "fix everything you found."
3. **Fix only what's approved**, one thing at a time, and confirm each fix doesn't break existing functionality.
4. **Test in the browser** after fixing — don't just assume it's correct because it compiles.

## Scope to review:

[Tell it what to look at — a specific page, a specific feature, or "the whole project"]
