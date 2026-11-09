import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { BookOpen, Database, Globe, Store, User } from "lucide-react";

import {
  ServiceBenefitsSection,
  ServiceCta,
  ServiceDetailHero,
  ServiceItemsSection,
  ServiceProcessSection,
} from "@/src/components/services/service-detail-sections";

const serviceIcons = [User, Globe, BookOpen, Store, Database];

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Services.pages.web");

  return {
    title: `${t("title")} ${t("color-title")} | QuarticCode`,
    description: t("description"),

    keywords: [
      "Web Development",
      "Next.js",
      "ERP",
      "eCommerce",
      "Blogs",
      "Business Websites",
      "QuarticCode",
    ],

    openGraph: {
      title: `${t("title")} ${t("color-title")} | QuarticCode`,
      description: t("description"),
      url: "https://quartic-code.com/services/web-development",
      siteName: "QuarticCode",
      type: "website",
    },

    alternates: {
      canonical: "https://quartic-code.com/services/web-development",
    },
  };
}

export default async function WebDevelopmentPage() {
  const t = await getTranslations("Services.pages.web");
  const ts = await getTranslations("Services");

  const servicesList = t.raw("services") as { title: string; desc: string }[];
  const chooseList = t.raw("choose.list") as string[];
  const processSteps = t.raw("process.steps") as string[];

  return (
    <main className="min-h-screen">
      <ServiceDetailHero
        backLabel={ts("title")}
        badge={t("badge")}
        title={t("title")}
        highlight={t("color-title")}
        description={t("description")}
        primaryLabel={t("cta-primary")}
        secondaryLabel={t("cta-secondary")}
        secondaryHref="/works"
      />

      <ServiceItemsSection
        index="01"
        title={t("title-service")}
        columns={3}
        items={servicesList.map((item, index) => ({
          icon: serviceIcons[index % serviceIcons.length],
          title: item.title,
          description: item.desc,
        }))}
      />

      <ServiceBenefitsSection
        index="02"
        title={t("choose.title")}
        items={chooseList}
      />

      <ServiceProcessSection
        index="03"
        title={t("process.title")}
        steps={processSteps}
      />

      <ServiceCta
        title={t("cta.title")}
        description={t("cta.description")}
        buttonLabel={t("cta.button")}
      />
    </main>
  );
}
