import { projects } from "@/src/lib/data/projects";
import { Project } from "./project";

export function ProjectsList() {
  return (
    <div className="flex flex-row flex-wrap gap-4 justify-center items-center">
      {projects.map((p) => {
        return <Project uiProject={p} key={p.project.title} />;
      })}
    </div>
  );
}
