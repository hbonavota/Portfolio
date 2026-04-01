import { buildMetadata } from "@/lib/metadata";

import { OrbytiaPage } from "@/components/pages/orbytia-page";

export const metadata = buildMetadata({
  locale: "es",
  pathname: "/es/orbytia",
  title: "Orbytia",
  description: "Contexto secundario de consultoría para parte del trabajo con clientes en software, automatización e IA aplicada."
});

export default function Page() {
  return <OrbytiaPage locale="es" />;
}
