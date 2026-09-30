# Specs

Spec-driven development records for this repository. Each change is described by a
spec here, with its originating prompt kept verbatim under [`docs/prompts/`](../prompts/).

| ID  | Title                                               | Status      | Spec                                                                     | Prompt                                                                          |
| --- | --------------------------------------------------- | ----------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------- |
| 001 | Align authorship claims on external integrations    | Implemented | [001-align-authorship-claims.md](001-align-authorship-claims.md)         | [../prompts/001-align-authorship-claims.md](../prompts/001-align-authorship-claims.md)       |
| 002 | AppSec capability and AI-assisted delivery in copy  | Approved    | [002-appsec-capability-ai-delivery.md](002-appsec-capability-ai-delivery.md) | [../prompts/002-appsec-capability-ai-delivery.md](../prompts/002-appsec-capability-ai-delivery.md) |

## Conventions

- **Specs:** `docs/specs/NNN-slug.md`, written in English.
- **Prompts:** `docs/prompts/NNN-slug.md`, stored verbatim in their original language.
- **Status values:** `Proposed` → `Approved` → `Implemented`.
- **Template sections:** Status · Context · Scope · Rules · Acceptance criteria ·
  Non-goals · Verification · References · AI assistance.
- Acceptance criteria are tracked as checklists (`[ ]` / `[x]`) inside each spec.
- The Verification section holds real results (searches, typecheck, build) and stays
  empty until the spec is implemented.
