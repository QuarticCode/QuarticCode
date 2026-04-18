import { Contact } from "@/src/components/contact/contact";
import { Hero } from "@/src/components/hero/hero";
import { MockUp } from "@/src/components/mock-up/mock-up";
import { ProjectContainer } from "@/src/components/projects/project-container";
import Services from "@/src/components/services/services";
import { CtaWorks } from "@/src/components/works/cta-works";

export default function Home() {
  return (
    <div className="flex flex-col md:mt-32 mt-24 items-center justify-center font-sans md:mr-8 md:ml-8">
      <Hero />

      <Services />

      <CtaWorks />

      <ProjectContainer />

      <MockUp />

      <Contact />
    </div>
  );
}
