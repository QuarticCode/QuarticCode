"use client";

import Project from "./project";
import { useProjects } from "@/src/hooks/use-projects";
import Loading from "../loading/loading";
import { useTranslations } from "next-intl";

export function ProjectsList() {
  const { projects, loading, error } = useProjects();
  const t = useTranslations("Projects.list");

  return (
    <section className="w-full px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <h1 className="text-4xl md:text-6xl font-bold text-center tracking-tight bg-linear-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
          {t("title")}
        </h1>

        <p className="text-muted-foreground mt-4 text-center max-w-xl">
          {t("description")}
        </p>

        <Loading loading={loading} error={error} message={t("loading")}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 w-full">
            {projects.map((p, i) => (
              <Project
                key={i}
                title={p.name}
                info={p.description}
                link={p.html_url}
              />
            ))}
          </div>
        </Loading>
      </div>
    </section>
  );
}
