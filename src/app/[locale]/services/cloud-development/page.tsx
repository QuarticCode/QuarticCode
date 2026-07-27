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
  ArrowRight,
  Boxes,
  CheckCircle2,
  Database,
  Network,
  Server,
  Shield,
  Activity,
  LucideIcon,
} from "lucide-react";

import { useTranslations } from "next-intl";

/* ======================
   Types
====================== */

// Mapeo de iconos por índice
const serviceIcons: LucideIcon[] = [
  Server, // 0: API Development
  Database, // 1: Database Architecture
  Activity, // 2: Monitoring
  Network, // 3: Business Intranets
  Boxes, // 4: ERP & POS Systems
];

/* ======================
   Metadata - Generada dinámicamente
====================== */

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

/* ======================
   Page Component
====================== */

export default function CloudInfrastructurePage() {
  const t = useTranslations("Services.pages.infrastructure");

  // Obtener arrays de traducciones
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

        {/* SERVICES */}

        <section>
          <h2 className="mb-10 text-4xl font-bold">{t("services-title")}</h2>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => {
              const Icon = serviceIcons[index % serviceIcons.length];

              return (
                <Card key={service.title}>
                  <CardHeader>
                    <Icon className="mb-4 h-8 w-8 text-indigo-500" />

                    <CardTitle>{service.title}</CardTitle>

                    <CardDescription>{service.description}</CardDescription>
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

        {/* USE CASES */}

        <section>
          <h2 className="mb-10 text-4xl font-bold">{t("use-cases-title")}</h2>

          <div className="grid gap-6 lg:grid-cols-3">
            {useCases.map((item) => (
              <Card key={item.title}>
                <CardContent className="pt-6">
                  <h3 className="font-semibold">{item.title}</h3>

                  <p className="mt-3 text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA */}

        <Card className="mt-24 border-indigo-500/20">
          <CardContent className="py-16 text-center">
            <Shield className="mx-auto mb-6 h-10 w-10 text-indigo-500" />

            <h2 className="text-4xl font-bold">{t("cta-title")}</h2>

            <p className="mt-4 text-muted-foreground">{t("cta-description")}</p>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 text-white transition hover:bg-indigo-500"
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
