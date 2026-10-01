# 005 — Verifiko case study

## Status

Approved.

## Context

`/work/verifiko` 404s and is not listed in `/work`. Two mechanisms:
`case-study-page.tsx` calls `notFound()` when a study has `pageRequired: false` (verifiko
does), and `work-page.tsx` lists a hardcoded `orderedSlugs` that excludes verifiko. The
existing verifiko case study is a thin placeholder.

This spec replaces it with a factual case study for Verifiko — the author's own product,
an explainable URL-risk detection service — lists it first in `/work`, and features it on
the home grid. All facts are taken from the Verifiko codebase on its `origin/main`
(verified in a temporary worktree, not the portfolio repo).

## Scope

Content and the two list surfaces, under `portfolio-v2/`:

1. `src/content/site.ts` — rewrite the `verifiko` `caseStudy` (strapline, summary, role,
   overview, challenge, approach, `architectureSteps`, highlights, outcome, publicLinks);
   set `featured: true` and `pageRequired: true`.
2. `src/content/site.ts` — update `homeContent` `selectedWork.description` (EN + ES) to
   reflect a product of the author's own plus the Rezolve projects.
3. `src/components/pages/home-page.tsx` — the featured filter includes a featured
   `product`, not only `client-work`, so Verifiko shows on the home grid (4 cards, 2×2).
4. `src/components/pages/work-page.tsx` — add `"verifiko"` first to `orderedSlugs`; set the
   page title (EN/ES); include the `product` category chip.
5. `src/app/work/page.tsx` and `src/app/es/trabajo/page.tsx` — SEO descriptions no longer
   say "Three projects" / "Tres proyectos".

## Rules

- AGENTS.md content rules. Facts only from the verified Verifiko `origin/main` codebase.
- Security work described as **categories only** — no thresholds, no scoring weights, no
  findings/severities. The internal decision threshold is not published.
- No competitor names; no named third-party reputation feeds.
- Metrics always carry the corpus size ("on a 40-URL labeled offline corpus").
- The repository is private — linked as "source available on request", not a URL.
- No changes to the Verifiko repository.

## Acceptance criteria

- [ ] `/work/verifiko` and `/es/trabajo/verifiko` resolve (no 404) — `pageRequired: true`
- [ ] Verifiko is listed first in `/work` and `/es/trabajo`
- [ ] Verifiko appears on the home "Selected work" grid (4 cards, 2×2)
- [ ] `/work` and `/es/trabajo` titles and SEO descriptions no longer say "Three/Tres projects"
- [ ] Metrics in the copy carry the 40-URL corpus size; no thresholds or weights published
- [ ] PageSpeed scores shown with exact values and date
- [ ] Every case fact is backed by the Verifiko `origin/main` codebase
- [ ] EN/ES parity preserved
- [ ] `typecheck` and `build` pass; `next-env.d.ts` reverted
- [ ] `git diff --stat` stays within `portfolio-v2/` and `docs/`

## Non-goals

- No changes to the Verifiko repository.
- Do not name third-party reputation feeds or any competitor.
- Do not claim "100 across the board". PageSpeed numbers are published only as verified by
  the author (PageSpeed Insights, 1 Oct 2026: Performance 99, Accessibility 100, Best
  Practices 96, SEO 100, mobile and desktop), with their date; not inferred from the code.
- Headless detonation is described as optional and off by default unless confirmed active
  in production.

## Verification

_Pending — spec approved, not yet implemented._

## References

- Prompt: [`docs/prompts/005-verifiko-case-study.md`](../prompts/005-verifiko-case-study.md)
- Verifiko metrics are the output of running `python -m evaluation.run_evaluation` against
  Verifiko `origin/main` in a temporary worktree (offline, deterministic).

## AI assistance

Implementation AI-assisted (Claude Code). Spec, review and verification by the author.
