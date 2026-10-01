# 006 — Open Graph images on subpages

## Status

Implemented in commit `333cda5`.

## Context

Subpages (case studies, `/work`, `/about`, `/contact`, `/orbytia` and their ES
equivalents) do not expose `og:image`. `lib/metadata.ts` → `buildMetadata()` sets
`openGraph` and `twitter` without `images`, and in Next.js a child segment's `openGraph`
object replaces the parent's — so the root `app/opengraph-image.tsx` is lost for every
subpage. Sharing `https://hbonavota.com/work/verifiko` on LinkedIn renders a card with no
image.

## Scope

`portfolio-v2/` only; no copy changes.

1. Extract the root OG card into `src/lib/og-card.tsx` (shared `ImageResponse` builder,
   same visual style) and refactor the root `app/opengraph-image.tsx` and
   `app/es/opengraph-image.tsx` to use it, without breaking them.
2. Per case study: `opengraph-image.tsx` + `twitter-image.tsx` in `app/work/[slug]/` and
   `app/es/trabajo/[slug]/`, 1200×630, same style. Content: the case `title` in the
   route's locale, the `summary` clamped to 2 lines with an ellipsis, and "hbonavota.com".
   Fall back to the generic site card when the slug does not exist. Export `alt`, `size`,
   `contentType`.
3. `buildMetadata()`: add `images` to `openGraph` and `twitter` pointing at the locale's
   root image (`/opengraph-image` + `/twitter-image` for en; `/es/opengraph-image` +
   `/es/twitter-image` for es), width 1200, height 630, alt. A route whose own segment
   provides an image (home routes and `[slug]`) passes `ownImage: true` so `images` is left
   unset and the file-based image wins.

## Rules

- AGENTS.md. No empty adjectives, no new figures; the card uses only the existing
  `title`/`summary` from `site.ts`.
- No changes to `site.ts` copy or any other metadata values.
- `next build` rewrites `portfolio-v2/next-env.d.ts`; revert before committing.

## Acceptance criteria

- [x] `npm run build` passes with no errors
- [x] `/`, `/work`, `/work/verifiko`, `/about`, `/es/trabajo/verifiko`, `/es/sobre-mi` each
      expose `og:image` and `twitter:image`
- [x] `/work/verifiko` and `/es/trabajo/verifiko` `og:image`/`twitter:image` point to the
      `[slug]` segment image, not the root
- [x] the `og:image` for `/work/verifiko` downloads as a PNG 1200×630
- [x] no copy or other metadata changed in `site.ts`
- [x] `typecheck` passes; `next-env.d.ts` reverted

## Non-goals

- No copy changes; no new metrics.
- No redesign of the OG card beyond extracting/reusing the existing style.

## Verification

Real results from the implementing task (commit `333cda5`):

- `npm run typecheck` → **exit 0**; `npm run build` → **exit 0**. Per-case
  `opengraph-image` and `twitter-image` routes generated (SSG) for each slug, EN and ES.
- `next start` + `curl … | grep og:image/twitter:image` for each route — all expose both:
  - `/` → `/opengraph-image`, `/twitter-image` (root file convention)
  - `/work` → `/opengraph-image`, `/twitter-image` (EN root fallback)
  - `/work/verifiko` → `/work/verifiko/opengraph-image`, `/work/verifiko/twitter-image`
    (the `[slug]` segment image, **not** the root)
  - `/about` → `/opengraph-image`, `/twitter-image` (EN root fallback)
  - `/es/trabajo/verifiko` → `/es/trabajo/verifiko/opengraph-image`,
    `/es/trabajo/verifiko/twitter-image` (the `[slug]` segment image)
  - `/es/sobre-mi` → `/es/opengraph-image`, `/es/twitter-image` (ES root fallback)
- `curl -o /tmp/og-verifiko.png http://localhost:3000/work/verifiko/opengraph-image` →
  `PNG image data, 1200 x 630`; renders the case card (title + summary clamped to two lines
  with an ellipsis + "hbonavota.com").
- `site.ts` untouched; no other metadata values changed. `next-env.d.ts` reverted. Diff
  within `portfolio-v2/` and `docs/`.

Note: Satori did not honor `-webkit-line-clamp` in this setup, so the two-line summary
clamp is done by trimming the text to a word boundary with an ellipsis in `og-card.tsx`.

## References

- Prompt: [`docs/prompts/006-og-images-subpages.md`](../prompts/006-og-images-subpages.md)

## AI assistance

Implementation AI-assisted (Claude Code). Spec, review and verification by the author.
