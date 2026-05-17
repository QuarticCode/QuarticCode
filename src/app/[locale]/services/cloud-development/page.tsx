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

/* ======================
   Metadata
====================== */

export const metadata: Metadata = {
  title: "Cloud Infrastructure & Business Systems | QuarticCode",

  description:
    "Infrastructure services including APIs, databases, monitoring, intranets, ERP systems and POS environments.",

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
    canonical: "https://quarticcode.com/services/cloud-infrastructure",
  },

  openGraph: {
    title: "Cloud Infrastructure & Business Systems | QuarticCode",

    description:
      "Reliable infrastructure for APIs, ERP, POS and business systems.",

    url: "https://quarticcode.com/services/cloud-infrastructure",

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
   Data
====================== */

const services: Service[] = [
  {
    title: "API Development",
    description:
      "Scalable APIs powering websites, mobile apps, ERP systems and integrations.",
    icon: Server,
  },

  {
    title: "Database Architecture",
    description:
      "Secure and optimized databases designed for performance and growth.",
    icon: Database,
  },

  {
    title: "Monitoring",
    description: "Real-time alerts, metrics and infrastructure monitoring.",
    icon: Activity,
  },

  {
    title: "Business Intranets",
    description: "Local internal systems and networks for businesses.",
    icon: Network,
  },

  {
    title: "ERP & POS Systems",
    description:
      "Local or cloud environments for inventory, sales and operations.",
    icon: Boxes,
  },
];

const benefits = [
  "Scalable architecture",
  "Secure infrastructure",
  "Monitoring & alerts",
  "Local and cloud deployments",
  "High availability",
  "Business continuity",
];

const useCases = [
  {
    title: "ERP Systems",

    description:
      "Internal software for operations, inventory and business workflows.",
  },

  {
    title: "POS Infrastructure",

    description:
      "Local sales systems with inventory synchronization and monitoring.",
  },

  {
    title: "API Ecosystems",

    description:
      "Backend services connecting websites, apps and third-party systems.",
  },
];

/* ======================
   Page
====================== */

export default function CloudInfrastructurePage() {
  return (
    <section className="min-h-screen bg-background text-foreground flex flex-col md:mt-32 mt-24 items-center justify-center font-sans md:mr-8 md:ml-8">
      <div className="container py-24">
        {/* HERO */}

        <header className="mb-24 max-w-4xl">
          <span className="inline-flex rounded-full bg-indigo-500/10 px-4 py-2 text-sm text-indigo-500">
            Cloud Infrastructure & Business Systems
          </span>

          <h1 className="mt-6 text-5xl font-bold leading-tight md:text-7xl">
            Infrastructure built for{" "}
            <span className="text-indigo-500">reliability & growth</span>
          </h1>

          <p className="mt-8 text-lg leading-8 text-muted-foreground">
            QuarticCode develops scalable infrastructure including APIs,
            databases, monitoring systems, intranets and ERP/POS environments
            for businesses requiring stable operations.
          </p>
        </header>

        {/* SERVICES */}

        <section>
          <h2 className="mb-10 text-4xl font-bold">Services included</h2>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => {
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
          <h2 className="mb-10 text-4xl font-bold">
            Why businesses need reliable infrastructure
          </h2>

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
          <h2 className="mb-10 text-4xl font-bold">
            Common business solutions
          </h2>

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

            <h2 className="text-4xl font-bold">Need secure infrastructure?</h2>

            <p className="mt-4 text-muted-foreground">
              Build scalable systems designed for long-term growth, monitoring
              and reliability.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 text-white transition hover:bg-indigo-500"
            >
              Contact QuarticCode
              <ArrowRight size={18} />
            </Link>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
