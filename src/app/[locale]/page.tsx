import { Hero } from "@/src/components/hero/hero";
import { ProjectContainer } from "@/src/components/projects/project-container";
import { ServicesList } from "@/src/components/services/services-list";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Home.Hero");
  return (
    <div className="flex flex-col md:mt-32 mt-24 items-center justify-center font-sans md:mr-8 md:ml-8 mr-2 ml-2">
      <Hero
        image="/logo.svg"
        title={t("title")}
        description={t("description")}
      />

      <ServicesList />

      <ProjectContainer />
    </div>
  );
}
