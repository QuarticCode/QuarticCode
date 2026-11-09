import type { ComponentType } from "react";

import { ArrowUpRight } from "lucide-react";

import { Button } from "@/src/components/ui/button";

import { useTranslations } from "next-intl";
import { Link } from "@/src/i18n/navigation";

type Feature = {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
};

const Features = ({ featuresList }: { featuresList: Feature[] }) => {
  const t = useTranslations("Services");

  return (
    <section className="section">
      <div className="container-page">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <span className="eyebrow">01 — {t("badge")}</span>
            <h2 className="mt-4 text-balance text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
              {t("title")}
            </h2>
            <p className="mt-4 max-w-[58ch] text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              {t("description")}
            </p>
          </div>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="group h-11 shrink-0 rounded-full px-6"
          >
            <Link href="/services">
              {t("showMore")}
              <ArrowUpRight className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </Button>
        </div>

        <div className="mt-12 border-t border-border">
          {featuresList.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.title}
                className="group relative border-b border-border py-7 sm:py-8"
              >
                <span className="absolute inset-y-7 left-0 w-px origin-top scale-y-0 bg-brand transition-transform duration-300 group-hover:scale-y-100" />

                <div className="flex items-start gap-4 sm:gap-6">
                  <span className="mt-1 hidden font-mono text-xs text-muted-foreground/50 sm:block">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-border bg-surface text-brand">
                    <Icon className="size-5" />
                  </span>

                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg font-semibold tracking-tight sm:text-xl">
                      {t(feature.title)}
                    </h3>
                    <p className="mt-1.5 max-w-[64ch] text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {t(feature.description)}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
