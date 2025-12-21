import { useTranslations } from "next-intl";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { ProjectsList } from "./projects-list";

export function ProjectContainer() {
  const t = useTranslations("Projects.container")
  return (
    <section className="flex md:flex-row flex-col md:w-4xl w-full gap-8 mt-16 mb-16">
      <Card className="w-full flex bg-linear-to-br from-purple-500/20 via-purple-500/50 to-blue-500/40">
        <CardHeader>
          <CardTitle className="text-4xl">{t("title")}</CardTitle>
          <CardDescription className="text-lg">
            {t("description")}
          </CardDescription>
        </CardHeader>
      </Card>
      <ProjectsList />
    </section>
  );
}
