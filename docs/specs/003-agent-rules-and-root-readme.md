# 003 — Agent rules and root README

## Status

Approved.

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

- [ ] AGENTS.md, CLAUDE.md and README.md at the root with the exact content of prompt 003
- [ ] CLAUDE.md contains only the line "@AGENTS.md"
- [ ] All relative links in README.md and AGENTS.md resolve to existing paths
- [x] Confidentiality check passed (run by the author with a private term list; terms not recorded)
- [ ] `git diff --stat` shows only AGENTS.md, CLAUDE.md, README.md and docs/
- [ ] portfolio-v2/ unchanged

## Non-goals

- Do not move or delete the root-level legacy v1 app — that is a future spec and requires
  verifying the deploy's Root Directory first.
- Do not touch `portfolio-v2/`.

## Verification

_Pending — spec approved, not yet implemented._

## References

- Prompt: [`docs/prompts/003-agent-rules-and-root-readme.md`](../prompts/003-agent-rules-and-root-readme.md)

## AI assistance

Implementation AI-assisted (Claude Code). Spec, review and verification by the author.
