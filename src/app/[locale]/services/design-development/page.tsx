import type { Metadata } from "next";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";

import {
  Palette,
  BadgePercent,
  LayoutTemplate,
  PenTool,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  LucideIcon,
} from "lucide-react";

/* ======================
   Metadata
====================== */

export const metadata: Metadata = {
  title: "Branding, UI/UX & Design Services | QuarticCode",

  description:
    "Logo design, brand identity, advertising banners, realistic mockups and UI/UX design for businesses and digital products.",

  keywords: [
    "Brand Identity",
    "Logo Design",
    "UI UX Design",
    "Advertising Banners",
    "Mockups",
    "Design Services",
    "QuarticCode",
  ],

  alternates: {
    canonical: "https://quarticcode.com/services/design",
  },

  openGraph: {
    title: "Design Services | QuarticCode",

    description: "Brand identity, UI/UX and visual design solutions.",

    url: "https://quarticcode.com/services/design",

    siteName: "QuarticCode",

    type: "website",
  },
};

/* ======================
   Types
====================== */

type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

/* ======================
   Services
====================== */

const designServices: Service[] = [
  {
    title: "Logo & Brand Identity",

    description:
      "Professional logos, visual identity systems and branding guidelines.",

    icon: Palette,
  },

  {
    title: "High-Converting Advertising",

    description: "Promotional banners designed for campaigns and conversions.",

    icon: BadgePercent,
  },

  {
    title: "Mockups & Presentations",

    description: "Realistic visual presentations for products and concepts.",

    icon: LayoutTemplate,
  },

  {
    title: "UI / UX Design",

    description:
      "Interfaces and user experiences focused on usability and engagement.",

    icon: PenTool,
  },
];

const benefits = [
  "Modern and scalable visual identity",
  "Conversion-focused designs",
  "Consistent branding",
  "Professional product presentation",
  "Improved user experience",
  "Designed for digital environments",
];

const useCases = [
  {
    title: "Business Branding",

    description: "Complete identity systems for businesses and startups.",
  },

  {
    title: "Marketing Campaigns",

    description:
      "Advertising creatives for social media and digital campaigns.",
  },

  {
    title: "Digital Products",

    description: "UI/UX systems for websites, apps and SaaS platforms.",
  },
];

/* ======================
   Page
====================== */

export default function DesignPage() {
  return (
    <section className="min-h-screen bg-background text-foreground flex flex-col md:mt-32 mt-24 items-center justify-center font-sans md:mr-8 md:ml-8">
      <div className="container py-24">
        {/* HERO */}

        <header className="mb-24 max-w-4xl">
          <span className="inline-flex rounded-full bg-indigo-500/10 px-4 py-2 text-sm text-indigo-500">
            Design & Branding
          </span>

          <h1 className="mt-6 text-5xl font-bold leading-tight md:text-7xl">
            Design that improves{" "}
            <span className="text-indigo-500">perception & conversion</span>
          </h1>

          <p className="mt-8 text-lg leading-8 text-muted-foreground">
            QuarticCode creates visual identities, interfaces and promotional
            designs built to strengthen brands and improve digital experiences.
          </p>
        </header>

        {/* SERVICES */}

        <section>
          <h2 className="mb-10 text-4xl font-bold">Design services</h2>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {designServices.map((service) => {
              const Icon = service.icon;

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
          <h2 className="mb-10 text-4xl font-bold">Why design matters</h2>

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
          <h2 className="mb-10 text-4xl font-bold">Common design solutions</h2>

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

        {/* FEATURE */}

        <Card className="mt-24">
          <CardContent className="py-16 text-center">
            <Sparkles className="mx-auto mb-6 h-12 w-12 text-indigo-500" />

            <h2 className="text-4xl font-bold">Your visual identity matters</h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              A strong design influences trust, recognition and how customers
              perceive your business.
            </p>
          </CardContent>
        </Card>

        {/* CTA */}

        <Card className="mt-24 border-indigo-500/20">
          <CardContent className="py-16 text-center">
            <h2 className="text-4xl font-bold">Need a stronger brand?</h2>

            <p className="mt-4 text-muted-foreground">
              Build a visual identity designed for growth and recognition.
            </p>

            <Link
              href="/contact"
              className=" mt-8 inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 text-white transition hover:bg-indigo-500"
            >
              Start a design project
              <ArrowRight size={18} />
            </Link>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
