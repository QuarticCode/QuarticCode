import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Briefcase,
  Building2,
  Calendar,
  Rocket,
  ShoppingCart,
  Smartphone,
  Truck,
  Users,
} from "lucide-react";

import {
  ServiceBenefitsSection,
  ServiceCallout,
  ServiceCta,
  ServiceDetailHero,
  ServiceItemsSection,
} from "@/src/components/services/service-detail-sections";

const appIcons: LucideIcon[] = [
  Briefcase,
  ShoppingCart,
  Building2,
  Calendar,
  Truck,
  BarChart3,
  Users,
  Rocket,
];

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Services.pages.mobile");

  return {
    title: `Mobile App Development | QuarticCode`,
    description: t("description"),

    keywords: [
      "Mobile Development",
      "App Development",
      "Business Apps",
      "eCommerce Apps",
      "ERP Apps",
      "Custom Apps",
      "QuarticCode",
    ],

    alternates: {
      canonical: "https://quartic-code.com/services/mobile-development",
    },

    openGraph: {
      title: `Mobile App Development | QuarticCode`,
      description: t("description"),
      url: "https://quartic-code.com/services/mobile-development",
      siteName: "QuarticCode",
      type: "website",
    },
  };
}

export default async function MobileDevelopmentPage() {
  const t = await getTranslations("Services.pages.mobile");
  const ts = await getTranslations("Services");

  const appTypes = t.raw("types") as { title: string; description: string }[];
  const benefits = t.raw("benefits") as string[];

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
        title={t("types-title")}
        columns={4}
        items={appTypes.map((app, index) => ({
          icon: appIcons[index % appIcons.length],
          title: app.title,
          description: app.description,
        }))}
      />

      <ServiceBenefitsSection
        index="02"
        title={t("benefits-title")}
        items={benefits}
      />

      <ServiceCallout
        icon={Smartphone}
        title={t("feature-title")}
        description={t("feature-description")}
      />

      <ServiceCta
        title={t("cta-title")}
        description={t("cta-description")}
        buttonLabel={t("cta-button")}
      />
    </main>
  );
}
