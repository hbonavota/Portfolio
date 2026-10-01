# Prompt 005 — Verifiko case study

Tarea: spec 005 — caso de estudio de Verifiko. Sigue AGENTS.md (rama nueva desde main, spec + prompt verbatim + índice antes del código; localizar y esperar OK).

Paso 1 — Localizar (solo lectura):
- En el build aparece la ruta /work/verifiko pero en producción da 404 y no figura en /work. Busca "verifiko" en portfolio-v2/src y explícame: ¿existe un caseStudy con ese slug?, ¿por qué no se lista y por qué da 404 (flag, filtro, notFound, etc.)?
- Lee /Users/rezolve/Documents/verifiko/README.md como única fuente de hechos (no inventes nada fuera de ahí).

Paso 2 — Propuesta (muéstramela antes de escribir), EN y ES, con la misma estructura que los otros casos:
- Resumen: detección explicable de URLs de phishing/malware; producto en producción + API.
- Qué hace: capas de detección (estática, typosquatting, TLS/redirecciones, HTML credential-harvest, reputación 2-of-N con circuit breaker, detonación headless) y score explicable con decision trace.
- Security engineering: prevención de SSRF, verificación de firmas (HMAC en webhooks, verificador de firmas de QStash), cuotas y rate limiting en Redis (fail-open), CSP y cabeceras, funciones de riesgo tras feature flags.
- Métricas honestas: precisión/FPR SIEMPRE con el tamaño del corpus (57 URLs etiquetadas; verifica el nº real), nº real de tests (verifica), Lighthouse 100.
- Arquitectura: Clean Architecture, ports & adapters, worker asíncrono durable.
- Rol: proyecto propio en solitario; implementación asistida por IA, spec/revisión/verificación propias.
- Links: www.verifiko.es. Repo: "source available on request" (el repo es privado; no enlazarlo).
- Orden en /work: Verifiko primero.

Reglas: AGENTS.md (sin adjetivos vacíos, todo defendible). No nombrar competidores. No publicar umbrales ni pesos de detección.
Sin commit hasta mi OK.

---

[Decisión interactiva: ante el conflicto README vs. propuesta, el autor eligió "Dejame leer el repo verifiko" para verificar las capacidades y números contra el código real.]

---

Ojo: el repo local de verifiko está en la rama fix/modal-transparency-mobile (desactualizada). El README que leíste es viejo; el de main está al día. No toques la carpeta de trabajo de verifiko (ni checkout ni stash).

1. Verifica contra origin/main en un worktree temporal:
   cd /Users/rezolve/Documents/verifiko && git fetch origin && git worktree add /tmp/verifiko-main origin/main
   - Lee /tmp/verifiko-main/README.md (fuente actual) y contrasta otra vez la tabla.
   - Recuenta en main: muestras del corpus (sin comentarios ni líneas vacías) y funciones de test.
   - Corre la evaluación en main, offline, con el venv existente:
     cd /tmp/verifiko-main/api && /Users/rezolve/Documents/verifiko/api/.venv/bin/python -m evaluation.run_evaluation
     Reporta precision, recall, FPR, accuracy y el umbral usado.
   - Al terminar: git -C /Users/rezolve/Documents/verifiko worktree remove /tmp/verifiko-main
2. Métricas: publícalas (opción b), siempre con el tamaño del corpus: "on an N-URL labeled offline corpus".
3. Lighthouse: fuera por ahora; lo añadiré solo si lo verifico yo.
4. Título /work: EN "Selected work: one product of my own and three projects at Rezolve." / ES "Trabajo seleccionado: un producto propio y tres proyectos en Rezolve." Verifiko primero. Ajusta también la description de la página /work y /es/trabajo si dice "Three projects"/"Tres proyectos".
5. Revisa si conviene featured: true para que aparezca en la home (grid de 2 columnas → 4 casos); dime cómo queda antes de aplicarlo.
6. Role: "Solo project — product engineer. AI-assisted implementation; the spec, the review and the verification are mine." (ES equivalente).

Con los datos de main, muéstrame la tabla actualizada y la propuesta final EN/ES. Después spec 005 + prompt verbatim + índice, y código. Sin commit.

---

[Decisión interactiva sobre el punto 5: dado que la home filtra por `category === "client-work"` y Verifiko es `product`, el autor eligió "Sí, añadir a la home (2×2)" — cambiar el filtro de home-page.tsx para incluir el producto destacado y actualizar la description de "Selected work".]

---

Antes de cerrar:
1. Añade al Outcome de Verifiko (EN/ES) el resultado de PageSpeed Insights que verifiqué hoy sobre www.verifiko.es: Performance 99, Accessibility 100, Best Practices 96, SEO 100 (mobile and desktop, Oct 2026). Números exactos, no "100 en todo". Actualiza la spec 005: quita "Do not publish a Lighthouse score" de Non-goals y añade el criterio "PageSpeed scores shown with exact values and date".
2. Añade este mensaje al final de docs/prompts/005 tras un separador ---.
3. Muéstrame el objeto verifiko completo de site.ts (EN y ES) tal como queda, para revisar el copy.
4. Levanta el dev server y saca capturas de /work/verifiko, /es/trabajo/verifiko y de la home (grid Selected work), en escritorio y móvil (390px). Pásame las rutas.
Sin commit hasta mi OK.

---

Revisado. Un fix de exactitud antes de cerrar:
1. architectureSteps, segundo ítem:
   EN → "A durable async worker runs enrichment off the request path: jobs are persisted in PostgreSQL and dispatched through a signed QStash queue."
   ES → "Un worker asíncrono durable ejecuta el enriquecimiento fuera de la ruta de request: los trabajos se persisten en PostgreSQL y se despachan mediante una cola QStash firmada."
2. outcome, primer ítem: "on a 40-URL labeled offline corpus" → "on a small, 40-URL labeled offline corpus" / ES "sobre un corpus offline etiquetado de 40 URLs" → "sobre un corpus offline etiquetado y acotado, de 40 URLs".
3. Añade este mensaje al prompt 005 tras ---.
4. typecheck + build, revierte next-env.d.ts.

Luego cierra según AGENTS.md: commit docs → commit implementación (guarda el hash) → spec 005 Implemented con hash + Verification + criterios → commit "docs(specs): mark 005 as implemented" → git log --oneline -4 → push de la rama.
