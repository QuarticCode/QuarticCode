"use client";

import { works } from "@/src/lib/data/works";
import Work from "./work";
import { useTranslations } from "next-intl";

export function Works() {
  const t = useTranslations("Works");

  return (
    <section className="w-full py-20 px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <h1 className="text-4xl md:text-6xl font-bold text-center tracking-tight bg-linear-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">
          {t("title")}
        </h1>

        <p className="text-muted-foreground mt-4 text-center max-w-xl">
          {t("description")}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 w-full">
          {works.map((w, i) => (
            <Work
              key={i}
              title={w.title}
              info={w.info}
              link={w.link}
              img={w.img}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
