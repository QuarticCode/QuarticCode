// src/app/page.tsx

import { CtaSection } from "@/src/components/contact/cta-section";
import { ServicesGrid } from "@/src/components/services/service-grid";

export default function Home() {
  return (
    <main className="md:mt-32 mt-24 min-h-screen">
      {/* Otros componentes como Navbar, Hero, etc. */}

      <ServicesGrid />

      <CtaSection />

      {/* Footer */}
    </main>
  );
}
