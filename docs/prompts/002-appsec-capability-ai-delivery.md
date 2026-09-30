# Prompt 002 — AppSec capability and AI-assisted delivery in copy

Implementa según docs/specs/002-appsec-capability-ai-delivery.md. Al terminar, marca la spec como Implemented con el hash del commit y rellena Verification.

Tarea acotada: añadir área AppSec y línea de entrega asistida por IA en el portfolio (EN y ES). Solo copy en portfolio-v2/src/content/site.ts (y donde viva "How I work" si está en otro archivo). No toques componentes, estilos ni estructura de tipos salvo que sea imprescindible; si lo es, avísame antes.

Reglas de contenido:
- APIs/sistemas de LALIGA: integrate/operate, nunca built. No indicar cuántos sistemas hay.
- No nombrar clientes, plataformas internas, proveedores ni pasarelas de pago.
- Sin adjetivos vacíos.

Paso 1 — Localizar (no edites):
Muéstrame archivo:línea y texto actual de:
a) capabilities.en / capabilities.es (las 4 tarjetas)
b) professionalExperience.summary.en / .es
c) el bloque "How I work" de la home (texto "Discovery, written spec, demo, rollout…" y su equivalente ES)
d) aboutPage: sección "Spec first, then code" y su equivalente ES
Espera mi OK.

Paso 2 — Reemplazar (tras OK), textos exactos:

a) capabilities
- Tarjeta "Ticketing and member portals" → mantener título; texto:
  EN "Sale flows, access control and member account journeys on WordPress/WooCommerce and Node, operated by the club's business team without waiting on a deploy."
  ES "Flujos de venta, control de acceso y recorridos de socio sobre WordPress/WooCommerce y Node, que el equipo de negocio del club opera sin esperar a un deploy."
- Tarjeta "WordPress under operational load" / "WordPress bajo carga operativa" → REEMPLAZAR por:
  EN título "Application security in the delivery loop"
  EN texto "Security review of payment and access-control flows before go-live: authorization (IDOR), payment-state integrity and idempotency, session and 2FA handling, secrets, security headers and rate limiting. Each finding fixed and re-verified."
  ES título "Seguridad de aplicaciones dentro del ciclo de entrega"
  ES texto "Revisión de seguridad de flujos de pago y control de acceso antes de salir a producción: autorización (IDOR), integridad e idempotencia del estado de pago, sesiones y 2FA, secretos, cabeceras de seguridad y rate limiting. Cada hallazgo corregido y verificado de nuevo."

b) professionalExperience.summary — reemplazar SOLO la segunda frase:
  EN "I integrate and operate in production the connections to LALIGA's ticketing and member-management systems." →
     "Recently led the security audit and hardening of a ticketing and payments platform ahead of go-live."
  ES "Integro y opero en producción la conexión con los sistemas de ticketing y gestión de socios de LALIGA." →
     "Recientemente lideré la auditoría de seguridad y el endurecimiento de una plataforma de ticketing y pagos de cara a su salida a producción."

c) "How I work" (home) — añadir al final del texto existente, como frase nueva:
  EN " Implementation is AI-assisted; the spec, the review of every change and the verification are mine."
  ES " La implementación es asistida por IA; la spec, la revisión de cada cambio y la verificación son mías."

d) aboutPage "Spec first, then code":
  EN título "Spec first, AI-assisted delivery"
  EN body "Every change starts as a written spec: scope, acceptance criteria, and the security and failure cases up front. Implementation is AI-assisted; my part is the spec, reviewing every diff and verifying against the acceptance criteria before anything ships. On a recent platform hardening that meant 70+ specs and 200+ traceable commits in about a month. Releases that survive match day are the test."
  ES título "Primero la spec, entrega asistida por IA"
  ES body "Cada cambio empieza como una spec escrita: alcance, criterios de aceptación y los casos de seguridad y de fallo desde el inicio. La implementación es asistida por IA; lo mío es la spec, la revisión de cada diff y la verificación contra los criterios de aceptación antes de publicar nada. En un endurecimiento reciente de plataforma fueron más de 70 specs y 200 commits trazables en un mes. Las releases que aguantan el día de partido son la prueba."

Paso 3 — Verificar:
- Busca en src: "WordPress under operational load", "WordPress bajo carga operativa", "anchored to the club", "anclados a la operativa" → 0 coincidencias.
- Busca referencias a la tarjeta eliminada (ids, anchors, íconos por índice) y confírmame que nada se rompe.
- Paridad EN/ES (capabilities 4/4), typecheck y build.
- Si next build modifica next-env.d.ts, reviértelo.
- Diff completo. Sin commit ni push.
