import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import type { LucideIcon } from "lucide-react";
import { Activity, Boxes, Database, Network, Server } from "lucide-react";

import {
  ServiceBenefitsSection,
  ServiceCta,
  ServiceDetailHero,
  ServiceItemsSection,
  ServiceUseCasesSection,
} from "@/src/components/services/service-detail-sections";

const serviceIcons: LucideIcon[] = [
  Server,
  Database,
  Activity,
  Network,
  Boxes,
];

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Services.pages.infrastructure");

  return {
    title: "Cloud Infrastructure & Business Systems | QuarticCode",
    description: t("description"),

    keywords: [
      "Cloud Infrastructure",
      "Business Systems",
      "API Development",
      "ERP",
      "POS",
      "Database",
      "Monitoring",
      "QuarticCode",
    ],

    alternates: {
      canonical: "https://quartic-code.com/services/cloud-infrastructure",
    },

    openGraph: {
      title: "Cloud Infrastructure & Business Systems | QuarticCode",
      description: t("description"),
      url: "https://quartic-code.com/services/cloud-infrastructure",
      siteName: "QuarticCode",
      type: "website",
    },
  };
}

export default async function CloudInfrastructurePage() {
  const t = await getTranslations("Services.pages.infrastructure");
  const ts = await getTranslations("Services");

  const services = t.raw("services") as {
    title: string;
    description: string;
  }[];
  const benefits = t.raw("benefits") as string[];
  const useCases = t.raw("use-cases") as {
    title: string;
    description: string;
  }[];

  return (
    <main className="min-h-screen">
      <ServiceDetailHero
        backLabel={ts("title")}
        badge={t("badge")}
        title={t("title")}
        highlight={t("color-title")}
        description={t("description")}
        primaryLabel={t("cta-button")}
      />

      <ServiceItemsSection
        index="01"
        title={t("services-title")}
        columns={3}
        items={services.map((service, index) => ({
          icon: serviceIcons[index % serviceIcons.length],
          title: service.title,
          description: service.description,
        }))}
      />

      <ServiceBenefitsSection
        index="02"
        title={t("benefits-title")}
        items={benefits}
      />

      <ServiceUseCasesSection
        index="03"
        title={t("use-cases-title")}
        items={useCases}
      />

      <ServiceCta
        title={t("cta-title")}
        description={t("cta-description")}
        buttonLabel={t("cta-button")}
      />
    </main>
  );
}
