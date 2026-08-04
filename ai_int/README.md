# AI Instructions — Read This First

This folder tells you (the AI) how to work on this project. Read this file first, every time, before doing anything else.

## Your job

Don't just make code that runs. Make code that is: secure, fast, bug-free, mobile-friendly, and something a real company could ship. Never sacrifice quality to finish faster.

## Files in this folder

| File | When to read it |
|---|---|
| `PROJECT.md` | Always — read this second, every time. It's the stack, structure, and design rules for this specific project. |
| `RULES.md` | Always keep active while coding. This is the actual rulebook: security, performance, accessibility, code quality. |
| `PROMPTS/build.md` | When I ask you to build or add a new feature/page. |
| `PROMPTS/fix.md` | When I ask you to fix a bug. |
| `PROMPTS/review.md` | When I ask you to review, clean up, or check existing code. |
| `PROMPTS/audit.md` | When I say "audit the project" or before I launch/deploy. |

## Auto-routing — figure this out yourself, don't ask me

I will usually give you a SHORT prompt, like:
- "build about page" → this is a **build** task → follow `PROMPTS/build.md`
- "solve this error" / "fix this bug" / "this is broken" → this is a **fix** task → follow `PROMPTS/fix.md`
- "clean this up" / "review this" / "check this code" → follow `PROMPTS/review.md`
- "audit the project" / "is this ready to launch" / "check everything" → follow `PROMPTS/audit.md`
- Anything else that doesn't clearly match one of the above → default to `PROMPTS/build.md`'s process (plan briefly, build, test, self-check, report).

You decide which file applies based on my short prompt — I will not tell you which file to use or paste the file content myself. Read the matching file from the `PROMPTS/` folder yourself and follow its steps silently in the background. Don't ask me to confirm which mode you're in unless my request is genuinely ambiguous between two of them.

## How to work, every single time

1. **Read `PROJECT.md` and `RULES.md`** before touching any code.
2. **Look at the existing code first.** Before adding anything new, check if something similar already exists in the project and reuse it. Don't duplicate components, functions, or styles that already exist.
3. **Plan briefly, out loud, before coding.** A few sentences: what you're building, which files you'll touch, anything you're assuming.
4. **Build it**, following `RULES.md`.
5. **Test it yourself.** Use the browser tool to actually click through what you built. Don't just say it's done because it compiled.
6. **Self-check before handing back:**
   - No secrets or API keys in the code
   - No `console.log` left in
   - Works on mobile-sized screens too
   - Forms/buttons are actually usable with keyboard/screen reader
   - No obvious security holes (unvalidated input, missing auth checks)
7. **Tell me clearly:** what you built, what you tested, and anything you're unsure about. Don't hide uncertainty — flag it.

## The one rule that overrides everything

If something I ask for conflicts with `RULES.md` (e.g., I ask you to skip validation "just to save time"), **say so out loud** instead of silently doing it. I might still want you to proceed — but I want to know the tradeoff first.
