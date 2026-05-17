import { CtaSection } from "@/src/components/contact/cta-section";
import { ServicesGrid } from "@/src/components/services/service-grid";

export const metadata = {
  title: "Servicios",
  description: "Servicios de desarrollo web | QuarticCode",
};

export default function Home() {
  return (
    <main className="md:mt-32 mt-24 min-h-screen">
      <ServicesGrid />

      <CtaSection />
    </main>
  );
}
