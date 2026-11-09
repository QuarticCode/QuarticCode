import { Contact } from "@/src/components/contact/contact";
import FAQSection from "@/src/components/faq/faq";
import { Hero } from "@/src/components/hero/hero";
import { MockUp } from "@/src/components/mock-up/mock-up";
import { ProjectContainer } from "@/src/components/projects/project-container";
import Services from "@/src/components/services/services";
import TechStackSection from "@/src/components/tech/tech-stack-section";
import { CtaWorks } from "@/src/components/works/cta-works";

export default function Home() {
  return (
    <main className="flex flex-col overflow-x-hidden">
      <Hero />

      <Services />

      <TechStackSection />

      <CtaWorks />

      <ProjectContainer />

      <MockUp />

      <Contact />

      <FAQSection />
    </main>
  );
}
