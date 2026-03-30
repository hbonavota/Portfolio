# Hernán Bonavota Portfolio

Production-ready portfolio built with Next.js App Router.

This repository contains the second-generation implementation of the site that now lives under `portfolio-v2/`. It is a bilingual portfolio (`EN` default, `ES` alternative) built as a content-driven static site with a small, explicit component surface and a typed content model.

The goal of this codebase is not to act as a general-purpose starter. It is a focused portfolio implementation with clear editorial constraints, minimal runtime complexity, and a structure that is easy to maintain as content evolves.

## Overview

- Bilingual portfolio with English as the canonical default and Spanish as a complete alternative
- Static pages for Home, Work, About, Orbytia and Contact
- Dynamic case study routes for the selected public work
- Metadata, sitemap and robots configured at the app level
- Content centralized in typed source files rather than spread across page components

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4
- App Router

## Runtime

- Node.js `>=22 <23`

The project is pinned to Node 22 to keep the toolchain predictable. A local `@opentelemetry/api` dependency is included to avoid resolution issues caused by legacy dependencies elsewhere in the parent workspace.

## Development commands

```bash
npm run dev
npm run typecheck
npm run build
npm run start
```

## Architecture

The project is intentionally small and content-first.

- `src/app` contains route entry points, global layout, sitemap and robots
- `src/components/pages` contains page-level compositions
- `src/components/site` contains the shared site shell and reusable UI primitives
- `src/content/site.ts` acts as the central typed content source
- `src/lib` contains route-localization and metadata helpers

This keeps the route layer thin and makes bilingual content changes explicit.

## Project structure

```text
src/
  app/
    page.tsx
    work/[slug]/page.tsx
    about/page.tsx
    orbytia/page.tsx
    contact/page.tsx
    es/
      page.tsx
      trabajo/[slug]/page.tsx
      sobre-mi/page.tsx
      orbytia/page.tsx
      contacto/page.tsx
    layout.tsx
    robots.ts
    sitemap.ts
  components/
    pages/
      home-page.tsx
      work-page.tsx
      case-study-page.tsx
      about-page.tsx
      orbytia-page.tsx
      contact-page.tsx
    site/
      header.tsx
      footer.tsx
      language-switcher.tsx
      case-card.tsx
      section.tsx
      site-frame.tsx
  content/
    site.ts
  lib/
    i18n.ts
    metadata.ts
```

## Routing and localization

The routing strategy is explicit rather than automatic:

- English routes live at `/`
- Spanish routes live under `/es`
- locale switching is path-based
- metadata alternates are generated from the same route model

This avoids hidden i18n behavior and keeps the URLs predictable.

## Design and implementation notes

- The UI is intentionally restrained: dark, editorial, technical, low-noise
- Content and presentation are separated, but not abstracted into a generic CMS
- The portfolio avoids unnecessary client-side complexity
- Pages are prerendered as static output where possible
- Only approved public links and public-facing work are represented in the content layer

## Key technical decisions

- Explicit bilingual routing instead of automatic locale negotiation
- Typed content stored in source control rather than in an external CMS
- Minimal runtime surface and static-first rendering where possible
- Shared metadata helpers to keep canonical and alternate URLs consistent
- Isolated Node 22 runtime to avoid dependency resolution issues from the parent workspace

## Development

Install dependencies:

```bash
npm install
```

Run locally:

```bash
npm run dev
```

The site will be available at `http://localhost:3000`.

## Build and verification

Type-check:

```bash
npm run typecheck
```

Production build:

```bash
npm run build
```

If `tsc --noEmit` fails with a stale `.next/types/validator.ts` error after structural changes, run `npm run build` once to regenerate Next's type artifacts and then rerun `npm run typecheck`.

## Notes for publication

- The legacy portfolio in the parent workspace is intentionally left untouched
- This directory is the source of truth for the current portfolio implementation
- The repository is structured to be pushed as a standalone modern Next.js project

## Author

Built and maintained by Hernán Bonavota as the current production portfolio codebase.
