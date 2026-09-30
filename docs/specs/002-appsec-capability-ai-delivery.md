# 002 — AppSec capability and AI-assisted delivery in copy

## Status

Approved.

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

- [ ] All copy from prompt 002 present verbatim in EN and ES
- [ ] Zero matches for `WordPress under operational load`
- [ ] Zero matches for `WordPress bajo carga operativa`
- [ ] Zero matches for `anchored to the club`
- [ ] Zero matches for `anclados a la operativa`
- [ ] No broken reference to the removed card
- [ ] capabilities 4/4 EN/ES
- [ ] `typecheck` passes
- [ ] `build` passes
- [ ] `next-env.d.ts` unchanged

## Non-goals

- Do **not** publish concrete security findings, severities or counts of findings.
- Do **not** link a write-up yet — it does not exist.

## Verification

_Pending — spec approved, not yet implemented._

## References

- Prompt: [`docs/prompts/002-appsec-capability-ai-delivery.md`](../prompts/002-appsec-capability-ai-delivery.md)

## AI assistance

Implementation AI-assisted (Claude Code). Spec, review and verification by the author.
