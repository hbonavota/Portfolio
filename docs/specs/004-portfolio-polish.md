# 004 — Portfolio polish: Docker, C#, ES title, Open Graph image

## Status

Approved.

## Context

Three small, unrelated polish items on the live site: the About stack omits Docker and
C#; the ES copy uses the translated job title "Ingeniero de software" where the English
title "Software Engineer" reads better as a role name; and the site ships no Open Graph /
Twitter share image, so links render without a card.

## Scope

Content and app-router metadata files under `portfolio-v2/`. No components, styles or
type structure changed beyond what these items require.

1. **Stack — Docker and C#.** In `portfolio-v2/src/content/site.ts` (`stack`): add
   `"Docker"` to Infrastructure, and set Languages to
   `["JavaScript / TypeScript", "Python", "C#", "PHP"]`. The `items` arrays are shared
   across locales, so one edit covers EN and ES.
2. **ES job title.** Replace the title "Ingeniero de software" with "Software Engineer"
   in the four ES copy spots: hero title (`site.ts`), `siteConfig.description.es`
   (`site.ts`), footer ES (`footer.tsx`), and the ES SEO description
   (`app/es/page.tsx`). Keep agreement ("Software Engineer especializado en…",
   "Software Engineer a cargo de…"). Also change the Orbytia case role title
   "Ingeniero full-stack" → "Full-stack Engineer" (`site.ts`).
3. **Open Graph image (Next.js App Router convention).**
   - `portfolio-v2/src/app/opengraph-image.tsx` (EN) and
     `portfolio-v2/src/app/es/opengraph-image.tsx` (ES): `ImageResponse` from
     `next/og`, 1200×630, exporting `alt`, `size`, `contentType`.
   - `twitter-image.tsx` in both locations re-exporting the same image.
   - Style reuses the site colors (dark base + cyan accent from `globals.css`). No
     external images or fonts.
   - EN: "Hernán Bonavota" / "Software Engineer" / "High-traffic ticketing, payments and
     application security" / "hbonavota.com".
   - ES: "Hernán Bonavota" / "Software Engineer" / "Ticketing, pagos y seguridad de
     aplicaciones en plataformas de alto tráfico" / "hbonavota.com".

## Rules

- Follow AGENTS.md content rules (public-safe; no client/vendor/platform names).
- EN/ES parity; Spanish neutral.
- Out-of-scope `ingeniería`/`Ingeniero full-stack` occurrences are reported, not changed
  without approval.
- `next build` rewrites `portfolio-v2/next-env.d.ts`; revert before committing.

## Acceptance criteria

- [ ] 0 matches for `Ingeniero de software` in `src`
- [ ] 0 matches for `Ingeniero full-stack` in `src`
- [ ] `"Docker"` and `"C#"` present in the About stack (renders in EN and ES)
- [ ] `next build` generates `/opengraph-image`, `/es/opengraph-image`, `/twitter-image`,
      `/es/twitter-image`
- [ ] Generated HTML of `/` and `/es` has `<meta property="og:image">` pointing to the
      correct per-locale image, as an absolute URL (metadataBase)
- [ ] Both generated PNGs render (saved to scratchpad and described / path provided)
- [ ] EN/ES parity preserved
- [ ] `typecheck` and `build` pass; `next-env.d.ts` reverted
- [ ] `git diff --stat` stays within `portfolio-v2/` (+ this spec/index under `docs/`)

## Non-goals

- Do not change `ingeniería` (the field) occurrences — they are correct Spanish.
- No changes to `lib/metadata.ts` unless an explicit `images` clash is found (none is).

## Verification

_Pending — spec approved, not yet implemented._

## References

- Prompt: [`docs/prompts/004-portfolio-polish.md`](../prompts/004-portfolio-polish.md)

## AI assistance

Implementation AI-assisted (Claude Code). Spec, review and verification by the author.
