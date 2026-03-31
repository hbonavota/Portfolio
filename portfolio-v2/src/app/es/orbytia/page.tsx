import { buildMetadata } from "@/lib/metadata";

import { OrbytiaPage } from "@/components/pages/orbytia-page";

export const metadata = buildMetadata({
  locale: "es",
  pathname: "/es/orbytia",
  title: "Orbytia",
  description: "Línea separada de consultoría para software, automatización e IA aplicada para clientes."
});

export default function Page() {
  return <OrbytiaPage locale="es" />;
}
