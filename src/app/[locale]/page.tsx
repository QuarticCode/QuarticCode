import { Hero } from "@/src/components/hero/hero";
import { MockUp } from "@/src/components/mock-up/mock-up";
import { ProjectContainer } from "@/src/components/projects/project-container";
import { ServicesList } from "@/src/components/services/services-list";

export default function Home() {
  return (
    <div className="flex flex-col md:mt-32 mt-24 items-center justify-center font-sans md:mr-8 md:ml-8">
      <Hero />

      <ServicesList />

      <ProjectContainer />

      <MockUp />
    </div>
  );
}
