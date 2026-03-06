"use client";

import { useProjects } from "@/src/hooks/use-projects";
import Work from "./work";
import Loading from "../loading/loading";

export function Works() {
  const { projects, loading, error } = useProjects();

  return (
    <section className="flex flex-col justify-center items-center w-full mt-16 mb-16">
      <h1 className="text-4xl py-20 md:text-7xl font-bold text-center mb-4">
        Proyectos Terminados
      </h1>
      <Loading loading={loading} error={error} message="Loading">
        <div className="flex flex-row flex-wrap lg:gap-8 gap-2 items-center justify-center">
          {projects.map((p, i) => {
            return (
              <Work
                title={p.name}
                info={p.description}
                link={p.html_url}
                key={i}
              />
            );
          })}
        </div>
      </Loading>
    </section>
  );
}
