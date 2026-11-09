import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";
import {
  BadgePercent,
  LayoutTemplate,
  Palette,
  PenTool,
  Sparkles,
} from "lucide-react";

import {
  ServiceBenefitsSection,
  ServiceCallout,
  ServiceCta,
  ServiceDetailHero,
  ServiceItemsSection,
  ServiceUseCasesSection,
} from "@/src/components/services/service-detail-sections";

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
    canonical: "https://quartic-code.com/services/design",
  },

  openGraph: {
    title: "Design Services | QuarticCode",

    description: "Brand identity, UI/UX and visual design solutions.",

    url: "https://quartic-code.com/services/design",

    siteName: "QuarticCode",

    type: "website",
  },
};

type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

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

export default function DesignPage() {
  return (
    <main className="min-h-screen">
      <ServiceDetailHero
        backLabel="Services"
        badge="Design & Branding"
        title="Design that improves"
        highlight="perception & conversion"
        description="QuarticCode creates visual identities, interfaces and promotional designs built to strengthen brands and improve digital experiences."
        primaryLabel="Start a design project"
      />

      <ServiceItemsSection
        index="01"
        title="Design services"
        columns={4}
        items={designServices}
      />

      <ServiceBenefitsSection
        index="02"
        title="Why design matters"
        items={benefits}
      />

      <ServiceUseCasesSection
        index="03"
        title="Common design solutions"
        items={useCases}
      />

      <ServiceCallout
        icon={Sparkles}
        title="Your visual identity matters"
        description="A strong design influences trust, recognition and how customers perceive your business."
      />

      <ServiceCta
        title="Need a stronger brand?"
        description="Build a visual identity designed for growth and recognition."
        buttonLabel="Start a design project"
      />
    </main>
  );
}
