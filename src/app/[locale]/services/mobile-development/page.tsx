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

/* ======================
   Metadata
====================== */

export const metadata: Metadata = {
  title: "Mobile App Development | QuarticCode",

  description:
    "Custom mobile applications for businesses, startups, eCommerce, ERP systems and innovative ideas.",

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
    canonical: "https://quarticcode.com/services/mobile-development",
  },

  openGraph: {
    title: "Mobile App Development | QuarticCode",

    description: "Custom mobile applications built for growth.",

    url: "https://quarticcode.com/services/mobile-development",

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
   Categories
====================== */

const appTypes: Service[] = [
  {
    title: "Business Apps",

    description:
      "Applications designed to improve operations and internal workflows.",

    icon: Briefcase,
  },

  {
    title: "eCommerce Apps",

    description: "Mobile stores, catalog browsing and customer purchases.",

    icon: ShoppingCart,
  },

  {
    title: "ERP & Management Apps",

    description: "Control inventory, employees, sales and business processes.",

    icon: Building2,
  },

  {
    title: "Booking Apps",

    description: "Appointments, reservations and scheduling systems.",

    icon: Calendar,
  },

  {
    title: "Delivery Platforms",

    description: "Orders, tracking and logistics systems.",

    icon: Truck,
  },

  {
    title: "Analytics Dashboards",

    description: "Real-time metrics and monitoring from mobile devices.",

    icon: BarChart3,
  },

  {
    title: "Community Apps",

    description: "Memberships, messaging and social interaction.",

    icon: Users,
  },

  {
    title: "Startup Ideas",

    description: "Transform custom ideas into scalable applications.",

    icon: Rocket,
  },
];

const benefits = [
  "Cross-platform development",
  "Fast performance",
  "Cloud integrations",
  "Authentication systems",
  "Payments & subscriptions",
  "Scalable architecture",
];

/* ======================
   Page
====================== */

export default function MobileDevelopmentPage() {
  return (
    <section className="min-h-screen bg-background text-foreground flex flex-col md:mt-32 mt-24 items-center justify-center font-sans md:mr-8 md:ml-8">
      <div className="container py-24">
        {/* HERO */}

        <header className="mb-24 max-w-4xl">
          <span className="inline-flex rounded-full bg-indigo-500/10 px-4 py-2 text-sm text-indigo-500">
            Mobile Development
          </span>

          <h1 className="mt-6 text-5xl font-bold leading-tight md:text-7xl">
            Apps built around{" "}
            <span className="text-indigo-500">your ideas & business</span>
          </h1>

          <p className="mt-8 text-lg leading-8 text-muted-foreground">
            QuarticCode develops custom mobile applications for businesses,
            startups and entrepreneurs. From eCommerce control apps to internal
            tools, ERP systems and completely new ideas.
          </p>
        </header>

        {/* APP TYPES */}

        <section>
          <h2 className="mb-10 text-4xl font-bold">Types of apps we build</h2>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {appTypes.map((app) => {
              const Icon = app.icon;

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
          <h2 className="mb-10 text-4xl font-bold">Included capabilities</h2>

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

            <h2 className="text-4xl font-bold">Have an idea?</h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Not every app fits a category. If you have a unique concept,
              QuarticCode can design and develop custom mobile experiences
              around it.
            </p>
          </CardContent>
        </Card>

        {/* CTA */}

        <Card className="mt-24 border-indigo-500/20">
          <CardContent className="py-16 text-center">
            <h2 className="text-4xl font-bold">Ready to build your app?</h2>

            <p className="mt-4 text-muted-foreground">
              Transform your idea into a scalable mobile product.
            </p>

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
              Start a project
              <ArrowRight size={18} />
            </Link>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
