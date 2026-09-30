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
