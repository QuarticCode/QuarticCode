import type { Metadata } from "next";
import Link from "next/link";
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
  Building2,
  Calendar,
  Truck,
  BarChart3,
  Users,
  Briefcase,
  Rocket,
  ArrowRight,
  CheckCircle2,
  LucideIcon,
} from "lucide-react";

import { useTranslations } from "next-intl";

/* ======================
   Types
====================== */

// Mapeo de iconos por índice
const appIcons: LucideIcon[] = [
  Briefcase, // 0: Business Apps
  ShoppingCart, // 1: eCommerce Apps
  Building2, // 2: ERP & Management Apps
  Calendar, // 3: Booking Apps
  Truck, // 4: Delivery Platforms
  BarChart3, // 5: Analytics Dashboards
  Users, // 6: Community Apps
  Rocket, // 7: Startup Ideas
];

/* ======================
   Metadata - Generada dinámicamente
====================== */

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

/* ======================
   Page Component
====================== */

export default function MobileDevelopmentPage() {
  const t = useTranslations("Services.pages.mobile");

  // Obtener arrays de traducciones
  const appTypes = t.raw("types") as { title: string; description: string }[];
  const benefits = t.raw("benefits") as string[];

  return (
    <section className="min-h-screen text-foreground flex flex-col md:mt-32 mt-24 items-center justify-center font-sans md:mr-8 md:ml-8">
      <div className="container py-24">
        {/* HERO */}

        <header className="mb-24 max-w-4xl">
          <span className="inline-flex rounded-full bg-indigo-500/10 px-4 py-2 text-sm text-indigo-500">
            {t("badge")}
          </span>

          <h1 className="mt-6 text-5xl font-bold leading-tight md:text-7xl">
            {t("title")}{" "}
            <span className="text-indigo-500">{t("color-title")}</span>
          </h1>

          <p className="mt-8 text-lg leading-8 text-muted-foreground">
            {t("description")}
          </p>
        </header>

        {/* APP TYPES */}

        <section>
          <h2 className="mb-10 text-4xl font-bold">{t("types-title")}</h2>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {appTypes.map((app, index) => {
              const Icon = appIcons[index % appIcons.length];

              return (
                <Card key={app.title}>
                  <CardHeader>
                    <Icon className="mb-4 h-8 w-8 text-indigo-500" />

                    <CardTitle>{app.title}</CardTitle>

                    <CardDescription>{app.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </section>

        {/* BENEFITS */}

        <section className="py-24">
          <h2 className="mb-10 text-4xl font-bold">{t("benefits-title")}</h2>

          <div className="grid gap-6 md:grid-cols-2">
            {benefits.map((item) => (
              <div key={item} className="flex items-center gap-4">
                <CheckCircle2 className="text-indigo-500" />

                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* FEATURE CARD */}

        <Card>
          <CardContent className="py-16 text-center">
            <Smartphone className="mx-auto mb-6 h-12 w-12 text-indigo-500" />

            <h2 className="text-4xl font-bold">{t("feature-title")}</h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              {t("feature-description")}
            </p>
          </CardContent>
        </Card>

        {/* CTA */}

        <Card className="mt-24 border-indigo-500/20">
          <CardContent className="py-16 text-center">
            <h2 className="text-4xl font-bold">{t("cta-title")}</h2>

            <p className="mt-4 text-muted-foreground">{t("cta-description")}</p>

            <Link
              href="/contact"
              className="
                mt-8
                inline-flex
                items-center
                gap-2
                rounded-lg
                bg-indigo-600
                px-6
                py-3
                text-white
                transition
                hover:bg-indigo-500
              "
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
