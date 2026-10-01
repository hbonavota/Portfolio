# Specs

Spec-driven development records for this repository. Each change is described by a
spec here, with its originating prompt kept verbatim under [`docs/prompts/`](../prompts/).

| ID  | Title                                               | Status      | Spec                                                                     | Prompt                                                                          |
| --- | --------------------------------------------------- | ----------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------- |
| 001 | Align authorship claims on external integrations    | Implemented | [001-align-authorship-claims.md](001-align-authorship-claims.md)         | [../prompts/001-align-authorship-claims.md](../prompts/001-align-authorship-claims.md)       |
| 002 | AppSec capability and AI-assisted delivery in copy  | Implemented | [002-appsec-capability-ai-delivery.md](002-appsec-capability-ai-delivery.md) | [../prompts/002-appsec-capability-ai-delivery.md](../prompts/002-appsec-capability-ai-delivery.md) |
| 003 | Agent rules and root README                         | Implemented | [003-agent-rules-and-root-readme.md](003-agent-rules-and-root-readme.md)  | [../prompts/003-agent-rules-and-root-readme.md](../prompts/003-agent-rules-and-root-readme.md)   |
| 004 | Portfolio polish: Docker, C#, ES title, OG image    | Approved    | [004-portfolio-polish.md](004-portfolio-polish.md)                        | [../prompts/004-portfolio-polish.md](../prompts/004-portfolio-polish.md)                         |

## Conventions

- **Specs:** `docs/specs/NNN-slug.md`, written in English.
- **Prompts:** `docs/prompts/NNN-slug.md`, stored verbatim in their original language.
- **Status values:** `Proposed` → `Approved` → `Implemented`.
- **Template sections:** Status · Context · Scope · Rules · Acceptance criteria ·
  Non-goals · Verification · References · AI assistance.
- Acceptance criteria are tracked as checklists (`[ ]` / `[x]`) inside each spec.
- The Verification section holds real results (searches, typecheck, build) and stays
  empty until the spec is implemented.
