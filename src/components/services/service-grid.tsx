"use client";

import { ServiceCard } from "./service-card";
import { servicesData } from "@/src/lib/data/services";
import { useTranslations } from "next-intl";
import { cn } from "@/src/lib/utils";

export function ServicesGrid() {
  const t = useTranslations("Services.page");

  return (
    <section className="pt-32 pb-16 md:pt-40" id="servicios">
      <div className="container-page">
        <div className="max-w-3xl">
          <span className="eyebrow">01 — {t("badge")}</span>
          <h1 className="mt-5 text-balance text-[clamp(2.6rem,6vw,4.5rem)] font-semibold tracking-[-0.045em]">
            {t("title")}
          </h1>
          <p className="mt-6 max-w-[62ch] text-pretty text-lg leading-relaxed text-muted-foreground">
            {t("description")}
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-12 lg:gap-5">
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              className={cn(
                "h-full",
                index === 0 || index === 3 ? "lg:col-span-7" : "lg:col-span-5",
              )}
            >
              <ServiceCard
                service={service}
                index={index}
                link={service.link}
                featured={index === 0 || index === 3}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
