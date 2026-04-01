import { buildMetadata } from "@/lib/metadata";
import { HomePage } from "@/components/pages/home-page";

export const metadata = buildMetadata({
  locale: "en",
  pathname: "/",
  title: "Hernán Bonavota",
  description: "Software engineer focused on ticketing portals, integrations, backend systems and operational product work."
});

export default function Page() {
  return <HomePage locale="en" />;
}
