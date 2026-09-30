# Prompt 001 — Align authorship claims on external integrations

Tarea acotada: corregir sobreventa de autoría en el copy del portfolio (EN y ES). Solo texto; no toques componentes, estilos, layout ni otras claves.

Reglas de contenido:
- Las APIs/sistemas de LALIGA NO los construí: los integro y opero en producción. Prohibido: "built", "construí", "APIs propias", "Owned APIs".
- No indicar cuántos sistemas/plataformas de LALIGA hay ("two", "dos", "both", "ambas") ni nombrarlos ni usar identificadores internos.
- La cola es un SaaS de terceros: "implemented/integrated a queue layer" es correcto; nunca "designed/built the queue".
- No afirmar que diseñé las plataformas: prohibido "I design ... platforms" / "Diseño ... plataformas".

Paso 1 — Localizar (no edites todavía):
Busca en todo el repo (contenido, diccionarios i18n, metadata/SEO, JSON-LD, OG tags), case-insensitive:
  "built", "I built", "Owned APIs", "APIs propias", "construí", "construyendo", "two LALIGA", "both LALIGA", "dos plataformas", "ambas plataformas", "I design and operate", "Diseño y opero", "building ticketing"
Revisa también si la frase de la cola en ES dice "capa de colas" o solo "capa".
Muéstrame una tabla: archivo:línea | idioma | texto actual. Espera mi OK.

Paso 2 — Reemplazar (tras mi OK), con estos textos exactos:
EN
- "Two LALIGA internal platforms — ticketing and member management — are integrated through APIs I built and operate." →
  "I integrate and operate in production the connections to LALIGA's ticketing and member-management systems."
- "Owned APIs against the two LALIGA internal platforms for member validation, account services and ticketing operations." →
  "Own in production the LALIGA integrations: member validation, account services and ticketing operations."
- "I design and operate platforms where concurrency, validation, and reliability affect sales, access, and operational flows." →
  "I operate and harden platforms where concurrency, validation, and reliability affect sales, access, and operational flows."
- "Software engineer building ticketing, member portals and LALIGA integrations for first-division football clubs." →
  "Software engineer running ticketing, member portals and LALIGA integrations for first-division football clubs."
ES
- "APIs propias contra las dos plataformas internas de LALIGA para validación de socios, servicios de cuenta y operación de ticketing." →
  "Responsable en producción de las integraciones con LALIGA: validación de socios, servicios de cuenta y operación de ticketing."
- El equivalente ES de la primera frase EN (si existe) →
  "Integro y opero en producción la conexión con los sistemas de ticketing y gestión de socios de LALIGA."
- "Diseño y opero plataformas donde la concurrencia, la validación y la fiabilidad impactan directamente en ventas, accesos y flujos operativos." →
  "Opero y endurezco plataformas donde la concurrencia, la validación y la fiabilidad impactan directamente en ventas, accesos y flujos operativos."
- El equivalente ES del intro "Software engineer building..." (si existe): usar "opero" / "a cargo de" en lugar de cualquier verbo de construcción, manteniendo el resto de la frase. Muéstrame la propuesta antes de aplicarla.
- Si la frase de la cola en ES dice solo "una capa", cámbiala a "una capa de colas".
Cualquier otra coincidencia del Paso 1 que no esté en esta lista (por ejemplo en metadata o SEO): NO la cambies, repórtamela con una propuesta.

Paso 3 — Verificar:
- Repite la búsqueda del Paso 1: 0 coincidencias salvo las que te autorice a dejar.
- Paridad EN/ES: mismas claves en ambos diccionarios, sin huérfanas.
- Ejecuta lint, typecheck y build. Muéstrame el diff completo y el resultado.
- Si el repo tiene convención de specs (specs/ o similar), crea una spec breve para este cambio con el formato existente, antes del diff.

No hagas commit ni push.

---

OK. Aplica así:

A: aplica los 8 reemplazos tal cual.

B: OK con tus propuestas ("running" EN / "a cargo de" ES) en site.ts:35, footer.tsx:27-28, app/page.tsx:8 y es/page.tsx:9.

C: aplica estos textos (no los tuyos):
- site.ts:213 EN →
  "Integrated and operated in production against LALIGA's ticketing and member-management APIs, plus legacy normalization and validated forms that feed a CRM Data Lake in real time."
- site.ts:231 ES →
  "Integración y operación en producción contra las APIs de ticketing y gestión de socios de LALIGA, normalización de legacy y formularios validados que alimentan en tiempo real un Data Lake del CRM."
- site.ts:281 EN → reemplaza solo el fragmento
  "and the integration layer against LALIGA's ticketing and member-management platforms — including the APIs I built for that integration."
  por
  "and the integration layer I operate against LALIGA's ticketing and member-management APIs."
- site.ts:304 ES → reemplaza solo el fragmento
  "y la capa de integración contra las plataformas de ticketing y gestión de socios de LALIGA — incluidas las APIs que construí para integrarlas."
  por
  "y la capa de integración que opero contra las APIs de ticketing y gestión de socios de LALIGA."
  (El resto de ambas frases, "AWS (EC2, RDS, S3, ACM) y Nginx…", queda igual.)

D: déjalas como están.

Luego ejecuta el Paso 3:
- Repite la búsqueda: "APIs I built", "APIs que construí", "Owned APIs", "APIs propias", "Two LALIGA", "Dos plataformas", "dos plataformas", "I design and operate", "Diseño y opero", "building ticketing", "construyendo ticketing" → 0 coincidencias.
- Paridad EN/ES, lint, typecheck, build.
- Spec breve si hay convención en el repo.
- Muéstrame el diff completo. Sin commit ni push.
