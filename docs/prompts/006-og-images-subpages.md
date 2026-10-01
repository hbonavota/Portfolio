# Prompt 006 — Open Graph images on subpages

Tarea: spec 006 — imágenes Open Graph en subpáginas del portfolio.

Contexto del bug: las subpáginas (casos de estudio, /work, /about, /contact, /orbytia y sus equivalentes ES) no exponen og:image. La causa es que lib/metadata.ts → buildMetadata() define `openGraph` y `twitter` sin `images`, y en Next.js eso reemplaza el openGraph del padre, así que se pierde app/opengraph-image.tsx. Al compartir https://hbonavota.com/work/verifiko en LinkedIn la tarjeta sale sin imagen.

Higiene git: git fetch && git checkout main && git pull; rama nueva fix/006-og-images-subpages. Commits pequeños. Al terminar, revertí portfolio-v2/next-env.d.ts si `next build` lo modifica. Mostrame `git log --oneline -3`.

Flujo SDD: creá docs/specs/006-og-images-subpages.md (Status: Approved → Implemented al final; Context, Scope, Rules, Acceptance criteria, Non-goals, Verification, References, AI assistance), docs/prompts/006-og-images-subpages.md con este prompt literal, y agregá la fila al índice docs/specs/README.md.

Implementación:
1. Tarjeta por caso de estudio: crear opengraph-image.tsx y twitter-image.tsx en app/work/[slug]/ y app/es/trabajo/[slug]/ con next/og ImageResponse, 1200×630, el mismo estilo visual que app/opengraph-image.tsx (fondo #07111f→#050b16, acento #22d3ee/#67e9f9, misma tipografía y barra). Contenido: título del caso (study.title en el idioma de la ruta), una línea con study.summary truncada con elipsis si no entra en 2 líneas, y "hbonavota.com" al pie. Exportá alt, size y contentType. Si el slug no existe, devolvé la tarjeta genérica del sitio. Reutilizá el componente/estilos de la imagen raíz si se puede extraer sin romperla (por ejemplo, a src/lib/og-card.tsx).
2. Respaldo para el resto de las subpáginas: en buildMetadata(), agregá a openGraph y a twitter `images` apuntando a la imagen raíz del idioma (/opengraph-image para en, /es/opengraph-image para es; y /twitter-image, /es/twitter-image para twitter), con width 1200, height 630 y alt. Los segmentos que tienen su propio opengraph-image.tsx (paso 1) deben seguir ganando: verificalo.
3. No cambies el copy de site.ts ni otra metadata.

Verificación (obligatoria, pegame la salida):
- cd portfolio-v2 && npm run build sin errores.
- npm run start en otro proceso y luego, para cada ruta: /, /work, /work/verifiko, /about, /es/trabajo/verifiko, /es/sobre-mi:
  curl -s http://localhost:3000<ruta> | grep -oE '<meta[^>]+(og:image|twitter:image)[^>]*>'
  Cada ruta debe tener og:image y twitter:image. En /work/verifiko y /es/trabajo/verifiko deben apuntar a la imagen del segmento [slug], no a la raíz.
- Descargá la imagen de og:image de /work/verifiko con curl -o /tmp/og-verifiko.png y confirmá con `file` que es PNG 1200x630.
- No me digas que funciona sin esa salida.

Reglas de contenido: sin adjetivos vacíos y sin cifras nuevas; la tarjeta solo usa title y summary que ya existen en site.ts.
