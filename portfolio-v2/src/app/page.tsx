import { buildMetadata } from "@/lib/metadata";
import { HomePage } from "@/components/pages/home-page";

export const metadata = buildMetadata({
  locale: "en",
  pathname: "/",
  title: "Hernán Bonavota",
  description: "Freelance software engineer for web platforms, integrations and production systems."
});

export default function Page() {
  return <HomePage locale="en" />;
}
