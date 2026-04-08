import { buildMetadata } from "@/lib/metadata";

import { OrbytiaPage } from "@/components/pages/orbytia-page";

export const metadata = buildMetadata({
  locale: "es",
  pathname: "/es/orbytia",
  title: "Orbytia",
  description: "Contexto secundario de consultoría alrededor de parte del trabajo con clientes."
});

export default function Page() {
  return <OrbytiaPage locale="es" />;
}
