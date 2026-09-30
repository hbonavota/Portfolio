# 003 — Agent rules and root README

## Status

Implemented in commit `c86948c`.

## Context

The repository does not fix its content rules or its spec-driven workflow anywhere, so
every session has to restate them. The root does not explain what the repository is.

## Scope

Documentation only. At the repository root: create `AGENTS.md`, create `CLAUDE.md`, and
rewrite `README.md`. Nothing else.

## Rules

- Use the exact content from prompt 003 for `AGENTS.md`, `CLAUDE.md` and `README.md`.
- `CLAUDE.md` contains only the line `@AGENTS.md`.
- Public-safe: no client names, vendors of audited systems, payment providers or internal
  platform names.
- Every relative link in `README.md` and `AGENTS.md` must resolve to an existing path.
- Do not touch `portfolio-v2/` or the root-level legacy v1 app.

## Acceptance criteria

- [x] AGENTS.md, CLAUDE.md and README.md at the root with the exact content of prompt 003
- [x] CLAUDE.md contains only the line "@AGENTS.md"
- [x] All relative links in README.md and AGENTS.md resolve to existing paths
- [x] Confidentiality check passed (run by the author with a private term list; terms not recorded)
- [x] `git diff --stat` shows only AGENTS.md, CLAUDE.md, README.md and docs/
- [x] portfolio-v2/ unchanged

## Non-goals

- Do not move or delete the root-level legacy v1 app — that is a future spec and requires
  verifying the deploy's Root Directory first.
- Do not touch `portfolio-v2/`.

## Verification

Real results from the implementing task (commit `c86948c`):

- Relative links resolve: `README.md` → `portfolio-v2/`, `docs/specs/README.md`,
  `docs/prompts/`, `AGENTS.md` all ✔; `AGENTS.md` → `docs/specs/README.md`,
  `portfolio-v2/src/content/site.ts`, `portfolio-v2/src/components/site/footer.tsx`,
  and pages under `portfolio-v2/src/app/**/page.tsx` all ✔.
- `git diff --stat main`: only `AGENTS.md`, `CLAUDE.md`, `README.md` and `docs/` — no
  path outside scope. ✔
- `portfolio-v2/` unchanged (no modified or untracked files). ✔
- `CLAUDE.md` contains only the line `@AGENTS.md`. ✔
- Confidentiality check run by the author: **passed** (0 relevant matches; term list not
  recorded).

## References

- Prompt: [`docs/prompts/003-agent-rules-and-root-readme.md`](../prompts/003-agent-rules-and-root-readme.md)

## AI assistance

Implementation AI-assisted (Claude Code). Spec, review and verification by the author.
