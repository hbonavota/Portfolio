# Prompt 004 — Portfolio polish: Docker, typo, ES title, Open Graph image

Tarea: spec 004 — portfolio polish: Docker en el stack, typo, título ES y imagen Open Graph. Sigue AGENTS.md (rama nueva desde main actualizado, spec 004 + prompt 004 verbatim + fila en índice ANTES de tocar código; localizar y esperar OK).

Alcance:

1. Stack de About: añade "Docker" en la categoría de infraestructura. Muéstrame cómo está agrupado el stack hoy y si figuran Python y C#; si faltan, propónmelo (no los añadas sin OK).

2. Typo: portfolio-v2/src/content/site.ts ~577 "datoscorregidos" → "datos corregidos".

3. ES: sustituir "Ingeniero de software" por "Software Engineer" (como nombre de cargo) en todas sus apariciones del copy ES: hero, siteConfig.description.es, footer ES y description SEO de app/es/page.tsx. Busca también "ingeniero" case-insensitive en todo src y repórtame cualquier otra aparición antes de cambiarla. Ajusta la concordancia si hace falta (p.ej. "Software Engineer especializado en…", "Software Engineer a cargo de…").

4. Imagen Open Graph con la convención de archivos de Next.js App Router:
   - portfolio-v2/src/app/opengraph-image.tsx (EN) y portfolio-v2/src/app/es/opengraph-image.tsx (ES), con ImageResponse de next/og, 1200×630, export de alt, size y contentType.
   - twitter-image.tsx en ambos sitios reexportando la misma imagen (metadata ya usa summary_large_image).
   - Estilo: reutiliza los colores del sitio (fondo oscuro y acento cian de globals.css/footer). Sin imágenes ni fuentes externas.
   - Contenido EN: "Hernán Bonavota" / "Software Engineer" / "High-traffic ticketing, payments and application security" / "hbonavota.com"
   - Contenido ES: "Hernán Bonavota" / "Software Engineer" / "Ticketing, pagos y seguridad de aplicaciones en plataformas de alto tráfico" / "hbonavota.com"
   - Comprueba que no choque con openGraph/twitter definidos en lib/metadata.ts (si hay images explícitas, repórtalo).

Acceptance criteria (además de los de AGENTS.md):
- 0 coincidencias de "datoscorregidos" e "Ingeniero de software" en src.
- "Docker" presente en el stack de About EN y ES.
- next build genera las rutas /opengraph-image y /es/opengraph-image (y twitter-image).
- En el HTML generado de / y /es aparece <meta property="og:image"> apuntando a la imagen correcta de cada idioma, con URL absoluta (metadataBase).
- Abre las dos PNG generadas y muéstrame que renderizan (guárdalas en el scratchpad y descríbelas, o pásame la ruta para que las vea).
- typecheck y build OK; next-env.d.ts revertido.

Sin commit ni push hasta mi OK.

---

OK. Decisiones:
1. C#: sí. Languages queda: "JavaScript / TypeScript", "Python", "C#", "PHP".
2. site.ts:657 "Ingeniero full-stack / Responsable de implementación" → "Full-stack Engineer / Responsable de implementación".
3. Las apariciones de "ingeniería" (campo) se quedan.
4. Typo: no existía (fue un corte de línea en mi terminal). Quítalo de la spec 004: elimina el punto 2 del Scope, su criterio de aceptación y la mención en el título/Context. Añade C# y el cambio de site.ts:657 al Scope y a los criterios (0 coincidencias de "Ingeniero full-stack" en src).
5. Añade esta respuesta al final de docs/prompts/004-portfolio-polish.md, tras un separador ---, como en el prompt 001.

Luego aplica el Paso 2 y verifica según la spec (incluidas las dos PNG del OG: guárdalas y dame la ruta para verlas). Sin commit ni push.
