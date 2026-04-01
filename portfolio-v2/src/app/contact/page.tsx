import { buildMetadata } from "@/lib/metadata";

import { ContactPage } from "@/components/pages/contact-page";

export const metadata = buildMetadata({
  locale: "en",
  pathname: "/contact",
  title: "Contact",
  description: "Best first contact for recruiters, hiring managers and technical conversations."
});

export default function Page() {
  return <ContactPage locale="en" />;
}
