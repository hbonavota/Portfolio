# Prompt 003 — Agent rules and root README

Tarea: spec 003 — reglas del repo para agentes (AGENTS.md + CLAUDE.md) y README raíz. Solo documentación; no toques portfolio-v2/ ni la app legacy de la raíz.

Paso 0 — Rama:
git fetch --all --prune && git checkout main && git pull && git checkout -b docs/agents-md
Confirma con git status -sb.

Paso 1 — Spec y prompt primero (no crees aún AGENTS.md/CLAUDE.md/README):
- docs/specs/003-agent-rules-and-root-readme.md con la plantilla de docs/specs/README.md, Status "Approved".
  Context: el repo no fija sus reglas de contenido ni su flujo SDD; cada sesión tiene que repetirlas. La raíz no explica qué es el repo.
  Scope: crear AGENTS.md, CLAUDE.md y reescribir README.md en la raíz. Nada más.
  Non-goals: mover/borrar la app legacy v1 de la raíz (spec futura, requiere verificar el Root Directory del deploy); tocar portfolio-v2/.
  Acceptance criteria:
  - [ ] AGENTS.md, CLAUDE.md y README.md en la raíz con el contenido exacto del prompt 003
  - [ ] CLAUDE.md contiene solo la línea "@AGENTS.md"
  - [ ] Todos los enlaces relativos de README.md y AGENTS.md resuelven a rutas existentes
  - [ ] Confidentiality check passed (run by the author with a private term list; terms not recorded)
  - [ ] git diff --stat solo muestra AGENTS.md, CLAUDE.md, README.md y docs/
  - [ ] portfolio-v2/ sin cambios
- docs/prompts/003-agent-rules-and-root-readme.md: este prompt, verbatim.
- Añade la fila 003 al índice docs/specs/README.md.
Muéstrame la spec y espera mi OK.

Paso 2 — Crear (tras OK), con este contenido exacto:

=== AGENTS.md ===
# AGENTS.md

Rules for AI coding agents and humans working in this repository.

## Repository map

- `portfolio-v2/` — the live site (Next.js App Router, TypeScript, Tailwind). Bilingual: EN default, ES under `/es`.
- Site copy lives in `portfolio-v2/src/content/site.ts`, plus page metadata in `portfolio-v2/src/app/**/page.tsx` and the footer in `portfolio-v2/src/components/site/footer.tsx`.
- `docs/specs/` — one spec per change, with index and template in [`docs/specs/README.md`](docs/specs/README.md).
- `docs/prompts/` — the originating prompt for each spec, stored verbatim.
- Root-level `src/`, `public/`, `package.json` — legacy v1. Do not edit.
- Production deploys from `main`.

## Workflow (spec-driven)

1. **No change without a spec.** Before touching code or copy, create `docs/specs/NNN-slug.md` with Status `Approved` and save the prompt verbatim in `docs/prompts/NNN-slug.md`. Add the row to the index.
2. **Locate, then edit.** Show `file:line` and current text for everything in scope and wait for approval.
3. **Stay in scope.** Anything outside the spec is reported with a proposal, not changed.
4. **Verify with real commands.** Every acceptance criterion is checked by running something. In `portfolio-v2/`, `npm run typecheck` and `npm run build` must pass. No linter is configured.
5. **Close the spec.** After the implementing commit, set Status to `Implemented` with the commit hash, fill Verification with the actual results, tick the criteria, update the index.
6. **Fixes go spec-first.** A correction after implementation updates the spec (or opens a new one) before the code changes.

## Content rules

- **Authorship verbs must survive "show me in an interview".** For external systems the author integrates: *integrate*, *operate*, *own in production*. Never *built* or *designed*.
- **LALIGA is named only as the ecosystem.** Never state how many external systems exist; never name internal platforms or identifiers.
- **The ticketing queue is third-party SaaS:** "implemented / integrated a queue layer".
- **No client names in headlines.** Never name vendors of audited systems, payment providers, or internal product names.
- **Security work is described as categories only.** No findings, severities, counts, or the origin or history of any audited system. Use past tense only for work that is closed.
- **AI-assisted delivery is stated openly.** Implementation is AI-assisted; the spec, the review and the verification are the author's. For led work use *led*, not *wrote*.
- **No empty adjectives.** Every claim needs evidence the author can show.
- **EN/ES parity.** Every copy change lands in both locales with the same keys. Spanish is neutral (no *vosotros*, no regional idioms).

## Git hygiene

- One branch per task, created from an up-to-date `main`: `git fetch --all --prune && git checkout main && git pull && git checkout -b <branch>`.
- Always `git fetch` before comparing branches or reasoning about what is on `main`.
- Merge pull requests with **Create a merge commit**. Never squash or rebase: specs cite commit hashes.
- `next build` rewrites `portfolio-v2/next-env.d.ts`; revert it before committing.
- Never commit or push without explicit approval. After committing, confirm with `git log --oneline -3`.
- Conventional commits; reference the spec in the message, e.g. `feat(copy): … (spec 004)`.

=== CLAUDE.md ===
@AGENTS.md

=== README.md ===
# hbonavota.com

Source for [hbonavota.com](https://hbonavota.com) — engineering portfolio of Hernán Bonavota (EN/ES).

- **Site:** [`portfolio-v2/`](portfolio-v2/) — Next.js App Router, TypeScript, Tailwind.
- **How changes are made:** spec-driven and AI-assisted. Every change has a spec in [`docs/specs/`](docs/specs/README.md) with its originating prompt in [`docs/prompts/`](docs/prompts/) and the real verification results.
- **Rules for agents and contributors:** [`AGENTS.md`](AGENTS.md).
- Root-level `src/` and `public/` hold the legacy v1 site, kept for reference.

## Run locally

```bash
cd portfolio-v2
npm install
npm run dev
```
=== FIN ===

Paso 3 — Verificar:
- Enlaces relativos de README.md y AGENTS.md → cada ruta existe (lístalas con ✔/✗).
- git diff --stat main → solo AGENTS.md, CLAUDE.md, README.md y docs/.
- portfolio-v2/ sin cambios.
- Deja sin marcar el criterio de confidencialidad: lo ejecuto yo.
- Muéstrame los archivos. Sin commit ni push.
