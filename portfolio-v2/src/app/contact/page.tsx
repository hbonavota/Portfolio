import { buildMetadata } from "@/lib/metadata";

import { ContactPage } from "@/components/pages/contact-page";

export const metadata = buildMetadata({
  locale: "en",
  pathname: "/contact",
  title: "Contact",
  description: "Contact for platforms, integrations, backend work and advanced WordPress projects."
});

export default function Page() {
  return <ContactPage locale="en" />;
}
