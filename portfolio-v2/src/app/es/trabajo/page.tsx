import { buildMetadata } from "@/lib/metadata";

import { WorkPage } from "@/components/pages/work-page";

export const metadata = buildMetadata({
  locale: "es",
  pathname: "/es/trabajo",
  title: "Trabajo",
  description: "Casos seleccionados de trabajo para clientes, producto y proyectos exploratorios."
});

export default function Page() {
  return <WorkPage locale="es" />;
}
