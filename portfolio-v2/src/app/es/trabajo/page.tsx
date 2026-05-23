import { buildMetadata } from "@/lib/metadata";

import { WorkPage } from "@/components/pages/work-page";

export const metadata = buildMetadata({
  locale: "es",
  pathname: "/es/trabajo",
  title: "Trabajo",
  description: "Tres proyectos en Rezolve — control de colas, validación de socios y registro bajo alta concurrencia."
});

export default function Page() {
  return <WorkPage locale="es" />;
}
