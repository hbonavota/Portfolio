import { buildMetadata } from "@/lib/metadata";

import { OrbytiaPage } from "@/components/pages/orbytia-page";

export const metadata = buildMetadata({
  locale: "es",
  pathname: "/es/orbytia",
  title: "Orbytia",
  description: "Contexto de consultoría separado. El perfil de ingeniería es la vía principal."
});

export default function Page() {
  return <OrbytiaPage locale="es" />;
}
