# Use this when: fixing a bug

Read `RULES.md` first if you haven't already this session.

## Steps to follow

1. **Understand it before touching code.** Restate what should happen vs. what's actually happening. Trace the actual cause — don't guess.
2. **Find the real root cause**, not just where the symptom shows up. Don't just hide the symptom (e.g., don't just add a check that avoids the crash without understanding why bad data got there in the first place).
3. **Make the smallest fix that actually solves it.** Don't rewrite unrelated code while you're in there.
4. **Test the fix yourself** in the browser — confirm the original problem is actually gone, and confirm nothing else broke.
5. **Report back:** what was actually wrong (the real cause), what you changed, and what you tested to confirm it's fixed.

## The bug:

- What I expected to happen: [...]
- What actually happens: [...]
- Steps to reproduce it: [...]
- Any error message shown: [...]
