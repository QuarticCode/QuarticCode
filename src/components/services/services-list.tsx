import { services } from "@/src/lib/data/services";
import { Service } from "./service";
import { useTranslations } from "next-intl";

export function ServicesList() {
  const t = useTranslations("Services");
  return (
    <section className="flex flex-col justify-center items-center w-full mt-16">
      <h1 className="text-4xl md:text-7xl font-bold text-center  mb-4">
        {t("title")}
      </h1>
      <div className="flex flex-row flex-wrap gap-2 max-w-4xl items-center justify-center">
        {services.map((s) => {
          return <Service service={s} key={s.title} />;
        })}
      </div>
    </section>
  );
}
