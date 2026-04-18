import { ProjectsList } from "@/src/components/projects/projects-list";

export default function Projects() {
  return (
    <div className="flex flex-col md:mt-32 mt-24 items-center justify-center font-sans md:mr-8 md:ml-8">
      <ProjectsList />
    </div>
  );
}
