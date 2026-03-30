import { buildMetadata } from "@/lib/metadata";

import { WorkPage } from "@/components/pages/work-page";

export const metadata = buildMetadata({
  locale: "es",
  pathname: "/es/trabajo",
  title: "Trabajo",
  description: "Casos seleccionados entre productos, client work, iniciativas de ecosistema y trabajo experimental."
});

export default function Page() {
  return <WorkPage locale="es" />;
}
