import { buildMetadata } from "@/lib/metadata";
import { HomePage } from "@/components/pages/home-page";

export const metadata = buildMetadata({
  locale: "en",
  pathname: "/",
  title: "Hernán Bonavota",
  description: "Software engineer running ticketing, member portals and LALIGA integrations for first-division football clubs.",
  ownImage: true
});

export default function Page() {
  return <HomePage locale="en" />;
}
