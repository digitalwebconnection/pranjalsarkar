# AI Instructions — Read This First

This folder tells you (the AI) how to work on this project. Read this file first, every time, before doing anything else.

## Your job

Don't just make code that runs. Make code that is: secure, fast, bug-free, mobile-friendly, and something a real company could ship. Never sacrifice quality to finish faster.

## Files in this folder

| File | When to read it |
|---|---|
| `PROJECT.md` | Always — read this second, every time. It's the stack, structure, and design rules for this specific project. **This is the only file in this folder that changes per-project** — everything else below is reused as-is across every new build. |
| `PROJECT_TEMPLATE.md` | Not read during normal work — only used once, at the very start of a brand-new project, by copying it to `PROJECT.md` and filling in the blanks. Keep this file blank/untouched so it's ready for the next project too. |
| `RULES.md` | Always keep active while coding. This is the actual rulebook: security, validation, auth, performance, accessibility, deployment, monitoring, code quality. It's the day-to-day distillation of `MERN_PRODUCTION_CHECKLIST.md` for this project's stack. |
| `MERN_PRODUCTION_CHECKLIST.md` | Reference, not a step-by-step read every time. This is the full generic MERN build-to-production master checklist. `RULES.md` and `audit.md` are already built from it. Go back to it directly when you hit something specific it covers in more depth than `RULES.md` does — e.g. Git/branching workflow, environment variable matrix, API response/status-code conventions, SEO/sitemap setup, payments/webhooks, VPS/Nginx/PM2 deployment — or when starting a brand-new project from scratch (its "Full Build Order" and site-planning section). |
| `PROMPTS/build.md` | When I ask you to build or add a new feature/page. |
| `PROMPTS/fix.md` | When I ask you to fix a bug. |
| `PROMPTS/review.md` | When I ask you to review, clean up, or check existing code. |
| `PROMPTS/audit.md` | When I say "audit the project" or before I launch/deploy. Also pulls the Pre-Launch Smoke Test and Final Security Audit questions from `MERN_PRODUCTION_CHECKLIST.md`. |

## Auto-routing — figure this out yourself, don't ask me

I will usually give you a SHORT prompt, like:
- "build about page" → this is a **build** task → follow `PROMPTS/build.md`
- "solve this error" / "fix this bug" / "this is broken" → this is a **fix** task → follow `PROMPTS/fix.md`
- "clean this up" / "review this" / "check this code" → follow `PROMPTS/review.md`
- "audit the project" / "is this ready to launch" / "check everything" → follow `PROMPTS/audit.md`
- Anything else that doesn't clearly match one of the above → default to `PROMPTS/build.md`'s process (plan briefly, build, test, self-check, report).

You decide which file applies based on my short prompt — I will not tell you which file to use or paste the file content myself. Read the matching file from the `PROMPTS/` folder yourself and follow its steps silently in the background. Don't ask me to confirm which mode you're in unless my request is genuinely ambiguous between two of them.

## How to work, every single time

1. **Read `PROJECT.md` and `RULES.md`** before touching any code. Skim `MERN_PRODUCTION_CHECKLIST.md` too if the task touches something `RULES.md` doesn't cover in detail (new infra, payments, SEO, a brand-new project).
2. **Look at the existing code first.** Before adding anything new, check if something similar already exists in the project and reuse it. Don't duplicate components, functions, or styles that already exist.
3. **Plan briefly, out loud, before coding.** A few sentences: what you're building, which files you'll touch, anything you're assuming.
4. **Build it**, following `RULES.md`.
5. **Test it yourself.** Use the browser tool to actually click through what you built. Don't just say it's done because it compiled.
6. **Self-check before handing back:** Run `npm run check` in the folder(s) you touched, and confirm it passes.
7. **Tell me clearly:** what you built, what you tested, and anything you're unsure about. Don't hide uncertainty — flag it.

## The one rule that overrides everything

If something I ask for conflicts with `RULES.md` (e.g., I ask you to skip validation "just to save time"), **say so out loud** instead of silently doing it. I might still want you to proceed — but I want to know the tradeoff first.