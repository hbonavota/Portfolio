import { buildMetadata } from "@/lib/metadata";

import { OrbytiaPage } from "@/components/pages/orbytia-page";

export const metadata = buildMetadata({
  locale: "es",
  pathname: "/es/orbytia",
  title: "Orbytia",
  description: "Estructura para mis productos y experimentos, separada del trabajo para clientes."
});

export default function Page() {
  return <OrbytiaPage locale="es" />;
}
