import { buildMetadata } from "@/lib/metadata";

import { WorkPage } from "@/components/pages/work-page";

export const metadata = buildMetadata({
  locale: "es",
  pathname: "/es/trabajo",
  title: "Trabajo",
  description: "Case studies sobre ticketing, validación de socios, control de concurrencia y trabajo de producto."
});

export default function Page() {
  return <WorkPage locale="es" />;
}
