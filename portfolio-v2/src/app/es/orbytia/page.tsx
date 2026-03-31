import { buildMetadata } from "@/lib/metadata";

import { OrbytiaPage } from "@/components/pages/orbytia-page";

export const metadata = buildMetadata({
  locale: "es",
  pathname: "/es/orbytia",
  title: "Orbytia",
  description: "Consultoría de software, automatización, IA aplicada y soluciones digitales."
});

export default function Page() {
  return <OrbytiaPage locale="es" />;
}
