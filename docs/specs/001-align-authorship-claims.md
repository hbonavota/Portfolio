# 001 — Align authorship claims on external integrations

## Status

Implemented — retroactive spec, written after the change.

## Context

The site copy attributed authorship of external APIs and systems that the author
**integrates and operates in production, but does not build or own**. Specifically, the
copy claimed built/owned APIs against LALIGA systems, stated how many such
platforms exist, and had the hero claim to "design" platforms. The ticketing queue — a
third-party SaaS — was also described in ES as just "a layer" rather than a queue layer.

This spec realigns the copy to accurate authorship: **integrate / operate**, never
**build**, for systems the author does not own. LALIGA is referenced only as the
surrounding ecosystem; no client names, providers, payment gateways or internal platform
names appear.

## Scope

Content only (EN and ES); no components, styles or layout changed.

- `portfolio-v2/src/content/site.ts`
  - hero description
  - capabilities card for external integrations and data validation
  - `professionalExperience` summary and notes
  - `aboutPage` — the "Where the work actually lives" section
  - the queue case-study ES summary
- `portfolio-v2/src/components/site/footer.tsx` — footer intro line (EN + ES)
- `portfolio-v2/src/app/page.tsx` and `portfolio-v2/src/app/es/page.tsx` — SEO meta
  descriptions

## Rules

- Use **integrate / operate**; never "built" for external APIs or systems the author
  does not own.
- Do **not** state the number of external systems (no "two" / "both" / "dos" / "ambas")
  and do **not** name internal platforms.
- The queue is third-party SaaS: "implemented / integrated a queue layer" is correct;
  never "designed / built the queue".
- Do **not** claim to design external platforms (no "I design … platforms" /
  "Diseño … plataformas").
- Keep EN/ES parity for every changed string.

## Acceptance criteria

- [x] Zero matches for `APIs I built`
- [x] Zero matches for `APIs que construí`
- [x] Zero matches for `Owned APIs`
- [x] Zero matches for `APIs propias`
- [x] Zero matches for `Two LALIGA`
- [x] Zero matches for `dos plataformas`
- [x] Zero matches for `I design and operate`
- [x] Zero matches for `Diseño y opero`
- [x] Zero matches for `building ticketing`
- [x] Zero matches for `construyendo ticketing`
- [x] EN/ES parity preserved (capabilities 4/4; summary and notes keys aligned, no orphans)
- [x] `typecheck` passes
- [x] `build` passes

## Non-goals

- The case-study line **"I built the registration flow spec-first"** stays — it describes
  the author's own work, not an external system.
- The recruiter-anchor line **"6+ years in IT, building and operating production systems"**
  stays — generic career phrasing, not an external-system authorship claim.

## Verification

Real results from the implementing task (commit `0b4dcc4`):

- Prohibited-term search over `portfolio-v2/src` (`APIs I built`, `APIs que construí`,
  `Owned APIs`, `APIs propias`, `Two LALIGA`, `Dos plataformas`, `dos plataformas`,
  `I design and operate`, `Diseño y opero`, `building ticketing`, `construyendo ticketing`)
  → **0 matches**.
- EN/ES parity: capabilities 4 EN / 4 ES; `summary` and `notes` keys aligned; no orphans.
- `npm run typecheck` (`tsc --noEmit`) → **exit 0**.
- `npm run build` (`next build`) → **exit 0**; all EN/ES routes prerendered.
- ESLint: not configured in this project (no config file, no dependency) — no lint step
  to run.
- `next build` regenerated the auto-generated `portfolio-v2/next-env.d.ts`; it was
  **reverted** so the change set stays copy-only.
- Result: **4 files changed, 17 insertions(+), 17 deletions(-)**.

## References

- Commit: `0b4dcc4` — `fix(copy): align authorship claims on LALIGA integrations (EN/ES)`
- Prompt: [`docs/prompts/001-align-authorship-claims.md`](../prompts/001-align-authorship-claims.md)

## AI assistance

Implementation AI-assisted (Claude Code). Spec, review and verification by the author.
