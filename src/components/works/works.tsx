import { works } from "@/src/lib/data/works";
import Work from "./work";

export function Works() {
  return (
    <section className="flex flex-col justify-center items-center w-full mt-16 mb-16">
      <h1 className="text-4xl py-20 md:text-7xl font-bold text-center mb-4">
        Trabajos Terminados
      </h1>
      <div className="flex flex-row flex-wrap lg:gap-8 gap-2 items-center justify-center">
        {works.map((w, i) => {
          return (
            <Work
              title={w.title}
              info={w.info}
              link={w.link}
              img={w.img}
              key={i}
            />
          );
        })}
      </div>
    </section>
  );
}
