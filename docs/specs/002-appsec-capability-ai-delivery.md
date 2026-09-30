# 002 — AppSec capability and AI-assisted delivery in copy

## Status

Implemented in commit `0986d7b`.

## Context

The copy understates two things worth surfacing: an application-security (AppSec)
capability, and that delivery is **AI-assisted** with the author owning the spec, the
review and the verification. This spec covers rewriting the capabilities cards and
selected experience / home / about copy to add an AppSec category and an explicit
AI-assisted-delivery statement, in EN and ES.

Security work is described as **categories of work only** — no concrete findings, no
severities, no counts. No client names, internal platforms, providers or payment gateways
appear. LALIGA is referenced only as the surrounding ecosystem.

## Scope

Content only (EN and ES); no components, styles or layout changed.

- `portfolio-v2/src/content/site.ts`
  - capabilities — rewrite the ticketing / member-portals card; replace the
    "WordPress under operational load" card with an AppSec card
  - `professionalExperience` summary — second sentence
  - `homeContent` — the "How I work" area
  - `aboutPage` — the "Spec first, then code" section
- Exact copy: see prompt 002.

## Rules

- Do **not** name clients, internal platforms, providers or payment gateways.
- List **categories** of security work, not findings, severities or counts of findings.
- Declare AI authorship: "AI-assisted"; the spec, the review and the verification are the
  author's.
- Keep EN/ES parity; capabilities must stay **4 cards in EN and 4 in ES**.
- No broken references to the removed WordPress card.

## Acceptance criteria

- [x] All copy from prompt 002 present verbatim in EN and ES
- [x] Zero matches for `WordPress under operational load`
- [x] Zero matches for `WordPress bajo carga operativa`
- [x] Zero matches for `anchored to the club`
- [x] Zero matches for `anclados a la operativa`
- [x] No broken reference to the removed card
- [x] capabilities 4/4 EN/ES
- [x] `typecheck` passes
- [x] `build` passes
- [x] `next-env.d.ts` unchanged

## Non-goals

- Do **not** publish concrete security findings, severities or counts of findings.
- Do **not** link a write-up yet — it does not exist.

## Verification

Real results from the implementing task (commit `0986d7b`):

- Zero-match search over `portfolio-v2/src` (`WordPress under operational load`,
  `WordPress bajo carga operativa`, `anchored to the club`, `anclados a la operativa`)
  → **0 matches**.
- Removed-card references: none broken. The removed card title returns 0 matches; the
  remaining "WordPress" mentions are legitimate content (stack, case studies, the new
  ticketing card). Cards render in `home-page.tsx` via `capabilityItems.map(...)` keyed
  by `item.title`, with no fixed indexes or per-position icons.
- Verbatim check: all 14 new strings from prompt 002 (EN + ES) found exactly in
  `site.ts` — **14/14**.
- EN/ES parity: capabilities **4/4**.
- `npm run typecheck` (`tsc --noEmit`) → **exit 0**.
- `npm run build` (`next build`) → **exit 0**.
- `next build` regenerated the auto-generated `portfolio-v2/next-env.d.ts`; it was
  **reverted** so the change set stays copy-only.

## References

- Commit: `0986d7b` — `feat(content): add AppSec capability and AI-assisted delivery to copy (EN/ES)`
- Prompt: [`docs/prompts/002-appsec-capability-ai-delivery.md`](../prompts/002-appsec-capability-ai-delivery.md)

## AI assistance

Implementation AI-assisted (Claude Code). Spec, review and verification by the author.
