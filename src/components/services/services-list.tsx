import { services } from "@/src/lib/data/services";
import { Service } from "./service";

export function ServicesList() {
  return (
    <section className="flex flex-col justify-center items-center mt-16">
      <h1 className="text-4xl">Servicios</h1>
      <div className="flex flex-row flex-wrap gap-2 items-center justify-center">
        {services.map((s) => {
          return <Service service={s} key={s.title} />;
        })}
      </div>
    </section>
  );
}
