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
