import { buildMetadata } from "@/lib/metadata";

import { OrbytiaPage } from "@/components/pages/orbytia-page";

export const metadata = buildMetadata({
  locale: "es",
  pathname: "/es/orbytia",
  title: "Orbytia",
  description: "La capa de ecosistema que conecta productos públicos, experimentos y dirección técnica."
});

export default function Page() {
  return <OrbytiaPage locale="es" />;
}
