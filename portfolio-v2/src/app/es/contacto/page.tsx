import { buildMetadata } from "@/lib/metadata";

import { ContactPage } from "@/components/pages/contact-page";

export const metadata = buildMetadata({
  locale: "es",
  pathname: "/es/contacto",
  title: "Contacto",
  description: "LinkedIn para roles. GitHub para código. CV bajo petición."
});

export default function Page() {
  return <ContactPage locale="es" />;
}
