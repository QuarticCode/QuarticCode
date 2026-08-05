import { projects } from "@/src/lib/data/projects";
import { generateSlug } from "@/src/lib/utils/generateSlug";
import Link from "next/link";

interface PageProps {
  params: {
    locale: string;
    slug: string;
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;

  const proyecto = projects.find((p) => generateSlug(p.name) == slug);

  if (!proyecto) {
    return (
      <section className="py-20 text-foreground  flex flex-col md:mt-32 mt-24 items-center font-sans md:mr-8 md:ml-8">
        <h1>Proyecto no encontrado</h1>
        <Link href={`/projects`}>Volver a la lista</Link>
      </section>
    );
  }

  return (
    <section className="py-20 text-foreground  flex flex-col md:mt-32 mt-24 items-center font-sans md:mr-8 md:ml-8">
      <Link href={`/projects`}>← Volver a la lista</Link>
      <h1>{proyecto.name}</h1>
      <p>{proyecto.description}</p>
    </section>
  );
}

export async function generateStaticParams() {
  const locales = ["es", "en"]; // Tus idiomas soportados

  return projects.flatMap((proyecto) =>
    locales.map((locale) => ({
      locale: locale,
      slug: generateSlug(proyecto.name),
    })),
  );
}
