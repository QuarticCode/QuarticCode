"use client";

import { ServiceCard } from "./service-card";
import { servicesData } from "@/src/lib/data/services";
import { useTranslations } from "next-intl";

export function ServicesGrid() {
  const t = useTranslations("Services.page");

  return (
    <section className="py-20" id="servicios">
      <div className="container mx-auto px-4">
        {/* Header de la sección */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            {t("badge")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            {t("title")}
          </h2>
          <p className="text-muted-foreground text-lg">{t("description")}</p>
        </div>

        {/* Grid de Tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              link={service.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
