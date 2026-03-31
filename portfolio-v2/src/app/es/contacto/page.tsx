import { buildMetadata } from "@/lib/metadata";

import { ContactPage } from "@/components/pages/contact-page";

export const metadata = buildMetadata({
  locale: "es",
  pathname: "/es/contacto",
  title: "Contacto",
  description: "Contacto para plataformas, integraciones, backend y proyectos de WordPress avanzado."
});

export default function Page() {
  return <ContactPage locale="es" />;
}
