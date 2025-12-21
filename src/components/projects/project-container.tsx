import { projects } from "@/src/lib/data/projects";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Project } from "./project";

export function ProjectContainer() {
  return (
    <section className="flex md:flex-row flex-col md:w-4xl w-full gap-8 md:mt-16 m-2">
      <Card className="w-full flex bg-linear-to-br from-purple-500/20 via-purple-500/50 to-blue-500/40">
        <CardHeader>
          <CardTitle className="text-4xl">Projectos Creados?</CardTitle>
          <CardDescription className="text-lg">
            En nuestro portafolio de proyectos creados, podrá revisar el
            tangible resultado de años de experiencia trabajando como un equipo
            cohesionado de programadores. No solo construimos software;
            entregamos productos robustos, escalables y de alta calidad que han
            resuelto problemas reales para nuestros clientes.
          </CardDescription>
        </CardHeader>
      </Card>
      <div className="flex flex-row gap-4 flex-wrap w-full justify-center items-center">
        {projects.map((p) => {
          return <Project uiProject={p} key={p.project.title} />;
        })}
        <Project
          uiProject={{
            project: {
              title: "Mas proyectos",
              description:
                "Si desea ver mas proyectos puede verlos a continuacion.",
              link: "#",
              image: "/logo.svg",
            },
            style: "dark:bg-yellow-900 bg-yellow-100",
          }}
        />
      </div>
    </section>
  );
}
