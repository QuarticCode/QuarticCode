import { ProjectsList } from "@/src/components/projects/projects-list";

export default function Projects() {
  return (
    <section className="py-20 bg-background text-foreground  flex flex-col md:mt-32 mt-24 items-center font-sans md:mr-8 md:ml-8">
      <ProjectsList />
    </section>
  );
}
