import { buildMetadata } from "@/lib/metadata";

import { WorkPage } from "@/components/pages/work-page";

export const metadata = buildMetadata({
  locale: "es",
  pathname: "/es/trabajo",
  title: "Trabajo",
  description: "Trabajos seleccionados entre proyectos para clientes, productos propios y experimentos."
});

export default function Page() {
  return <WorkPage locale="es" />;
}
