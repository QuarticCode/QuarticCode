import { Metadata } from "next";
import Link from "next/link";
import { getTranslations } from "next-intl/server";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/src/components/ui/card";

import {
  Globe,
  Store,
  User,
  BookOpen,
  Database,
  ArrowRight,
} from "lucide-react";

import { useTranslations } from "next-intl";

// Tipos
type ServiceIcon = typeof Globe | typeof Store | typeof User | typeof BookOpen | typeof Database;

// Mapeo de iconos
const serviceIcons: ServiceIcon[] = [User, Globe, BookOpen, Store, Database];

/* ===================================
Metadata - Generada dinámicamente
=================================== */

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
      url: "https://quarticcode.com/services/web-development",
      siteName: "QuarticCode",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: `${t("title")} ${t("color-title")} | QuarticCode`,
      description: t("description"),
    },

    alternates: {
      canonical: "https://quarticcode.com/services/web-development",
    },
  };
}

/* ===================================
Page Component
=================================== */

export default function WebDevelopmentPage() {
  const t = useTranslations("Services.pages.web");
  
  // Obtener arrays de traducciones
  const servicesList = t.raw("services") as { title: string; desc: string }[];
  const chooseList = t.raw("choose.list") as string[];
  const processSteps = t.raw("process.steps") as string[];

  return (
    <section className="min-h-screen text-foreground flex flex-col md:mt-32 mt-24 items-center justify-center font-sans md:mr-8 md:ml-8">
      {/* HERO */}

      <div className="container pb-28 px-4">
        <div className="max-w-4xl">
          <p className="inline-flex bg-indigo-500/10 text-indigo-500 px-4 py-2 rounded-full text-sm mb-6">
            {t("badge")}
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            {t("title")}
            <span className="text-indigo-500">
              {" "}
              {t("color-title")}
            </span>
          </h1>

          <p 
            className="mt-8 text-muted-foreground text-lg leading-8"
          >{t("description")}</p>

          <div className="mt-10 flex gap-4 flex-wrap">
            <Link
              href="/contact"
              className="bg-indigo-600 hover:bg-indigo-500 px-6 py-3 rounded-lg text-white font-medium transition"
            >
              {t("cta-primary")}
            </Link>

            <Link 
              href="/portfolio" 
              className="border px-6 py-3 rounded-lg hover:bg-muted transition"
            >
              {t("cta-secondary")}
            </Link>
          </div>
        </div>
      </div>

      {/* SERVICES */}

      <section className="container py-20 px-4">
        <h2 className="text-4xl font-bold">{t("title-service")}</h2>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {servicesList.map((item, index) => {
            const Icon = serviceIcons[index % serviceIcons.length];

            return (
              <Card key={item.title}>
                <CardHeader>
                  <Icon className="h-8 w-8 text-indigo-500 mb-4" />

                  <CardTitle>{item.title}</CardTitle>

                  <CardDescription>{item.desc}</CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </section>

      {/* BENEFITS */}

      <section className="container pt-24 px-4">
        <h2 className="text-4xl font-bold mb-10">{t("choose.title")}</h2>

        <div className="flex flex-row space-y-6 gap-4 flex-wrap">
          {chooseList.map((item) => (
            <div
              key={item}
              className="flex flex-row max-w-max p-4 md:gap-4 gap-2 rounded-xl bg-indigo-500/40 justify-center items-center md:h-20 h-12"
            >
              <h3 className="md:text-2xl text-xl">{item}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}

      <section className="container py-24 px-4">
        <h2 className="text-4xl font-bold mb-10">{t("process.title")}</h2>

        <div className="grid md:grid-cols-4 gap-6">
          {processSteps.map((step) => (
            <Card key={step}>
              <CardContent className="pt-6">
                <p className="font-semibold">{step}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}

      <section className="container pb-28 px-4">
        <Card className="border-indigo-500/20">
          <CardContent className="py-16 text-center">
            <h2 className="text-4xl font-bold">
              {t("cta.title")}
            </h2>

            <p className="text-muted-foreground mt-4">
              {t("cta.description")}
            </p>

            <Link
              href="/contact"
              className="items-center inline-flex bg-indigo-600 gap-2 mt-8 hover:bg-indigo-500 py-3 px-6 text-white rounded-lg transition"
            >
              {t("cta.button")}
              <ArrowRight size={18} />
            </Link>
          </CardContent>
        </Card>
      </section>
    </section>
  );
}