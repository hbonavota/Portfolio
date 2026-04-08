import { buildMetadata } from "@/lib/metadata";

import { WorkPage } from "@/components/pages/work-page";

export const metadata = buildMetadata({
  locale: "es",
  pathname: "/es/trabajo",
  title: "Trabajo",
  description: "Casos sobre validación, concurrencia, integraciones y producto en producción."
});

export default function Page() {
  return <WorkPage locale="es" />;
}
