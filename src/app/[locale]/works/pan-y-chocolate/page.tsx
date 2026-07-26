import type { Metadata } from "next";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";

import {
  Smartphone,
  ShoppingCart,
  Receipt,
  Printer,
  CreditCard,
  Users,
  ShieldCheck,
  Database,
  ClipboardList,
  Package,
  ArrowRight,
  CheckCircle2,
  LucideIcon,
} from "lucide-react";

// Importa los tipos de iconos
type FeatureKey = "f1" | "f2" | "f3" | "f4" | "f5" | "f6" | "f7" | "f8" | "f9";

// Mapeo de características con sus respectivos iconos
const featureIcons: Record<FeatureKey, LucideIcon> = {
  f1: Package,
  f2: ShoppingCart,
  f3: Receipt,
  f4: CreditCard,
  f5: Printer,
  f6: Receipt,
  f7: ClipboardList,
  f8: Users,
  f9: Database,
};

// Orden de las características para mantener consistencia
const featureKeys: FeatureKey[] = [
  "f1",
  "f2",
  "f3",
  "f4",
  "f5",
  "f6",
  "f7",
  "f8",
  "f9",
];

/* ===================================
Metadata - Generada dinámicamente
=================================== */

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Works.pages.pan-y-chocolate");

  return {
    title: `${t("title")} POS | QuarticCode`,
    description: t("description"),
    keywords: [
      "Android POS",
      "Restaurant POS",
      "Cafe POS",
      "Thermal Printer",
      "Point of Sale",
      "QuarticCode",
    ],
    alternates: {
      canonical: "https://quarticcode.com/projects/pan-y-chocolate-pos",
    },
    openGraph: {
      title: `${t("title")} POS | QuarticCode`,
      description: t("description"),
      url: "https://quarticcode.com/projects/pan-y-chocolate-pos",
      siteName: "QuarticCode",
      type: "website",
    },
  };
}

/* ===================================
Page Component
=================================== */

export default function PanYChocolatePage() {
  const t = useTranslations("Works.pages.pan-y-chocolate");

  // Arrays de traducciones
  const highlights = t.raw("highlights") as string[];
  const technologies = t.raw("technologies") as string[];

  return (
    <section className="min-h-screen text-foreground flex flex-col items-center justify-center md:mt-32 mt-24 md:mx-8">
      <div className="container py-24">
        {/* HERO */}

        <header className="max-w-4xl mb-24">
          <span className="inline-flex rounded-full bg-amber-500/10 px-4 py-2 text-sm text-amber-500">
            {t("badge")}
          </span>

          <h1 className="mt-6 text-5xl md:text-7xl font-bold">
            <span className="text-amber-500">{t("title")}</span>
            <span className="px-2 py-1 rounded-lg">{t("color-title")}</span>
          </h1>

          <p className="mt-8 text-lg text-muted-foreground leading-8">
            {t("description")}
          </p>
        </header>

        {/* ABOUT */}

        <section className="mb-24 max-w-5xl">
          <h2 className="text-4xl font-bold mb-8 text-amber-500">
            {t("what")}
          </h2>

          <div className="space-y-6 text-muted-foreground leading-8 text-lg">
            <p>{t("what-text1")}</p>
            <p>{t("what-text2")}</p>
            <p>{t("what-text3")}</p>
          </div>
        </section>

        {/* FEATURES */}

        <section>
          <h2 className="text-4xl font-bold mb-10">{t("features-title")}</h2>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {featureKeys.map((key) => {
              const Icon = featureIcons[key];
              const title = t(`features.${key}.title`);
              const description = t(`features.${key}.description`);

              return (
                <Card key={key}>
                  <CardHeader>
                    <Icon className="h-8 w-8 text-amber-500 mb-4" />
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>{description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </section>

        {/* USER ROLES */}

        <section className="py-24">
          <h2 className="text-4xl font-bold mb-10">{t("roles-title")}</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <ShieldCheck className="text-amber-500 h-8 w-8 mb-4" />
                <CardTitle>{t("admin-title")}</CardTitle>
                <CardDescription>{t("admin-description")}</CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Users className="text-amber-500 h-8 w-8 mb-4" />
                <CardTitle>{t("cashier-title")}</CardTitle>
                <CardDescription>{t("cashier-description")}</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* TECHNOLOGIES */}

        <section>
          <h2 className="text-4xl font-bold mb-10">{t("tech-title")}</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {technologies.map((tech) => (
              <div key={tech} className="flex items-center gap-4">
                <CheckCircle2 className="text-amber-500" />
                <span>{tech}</span>
              </div>
            ))}
          </div>
        </section>

        {/* HIGHLIGHTS */}

        <section className="py-24">
          <h2 className="text-4xl font-bold mb-10">{t("highlights-title")}</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {highlights.map((item) => (
              <div key={item} className="flex items-center gap-4">
                <CheckCircle2 className="text-amber-500" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}

        <Card className="border-amber-500/20">
          <CardContent className="py-16 text-center">
            <Smartphone className="mx-auto h-12 w-12 text-amber-500 mb-6" />

            <h2 className="text-4xl font-bold">{t("cta-title")}</h2>

            <p className="mt-4 text-muted-foreground">{t("cta-description")}</p>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-amber-600 px-6 py-3 text-white hover:bg-amber-500 transition"
            >
              {t("cta-button")}
              <ArrowRight size={18} />
            </Link>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
