import { Metadata } from "next";
import Link from "next/link";
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

export const metadata: Metadata = {
  title: "Web Development Services | QuarticCode",
  description:
    "Custom web development services for businesses, personal brands, eCommerce, blogs and ERP systems. Fast, scalable and SEO optimized websites.",

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
    title: "Web Development | QuarticCode",
    description:
      "Professional websites, online stores, ERP systems and custom platforms.",
    url: "https://quarticcode.com/services/web-development",
    siteName: "QuarticCode",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Web Development | QuarticCode",
    description: "Custom websites and scalable solutions.",
  },

  alternates: {
    canonical: "https://quarticcode.com/services/web-development",
  },
};

const services = [
  {
    title: "Personal Websites",
    icon: User,
    desc: "Portfolio websites, personal brands and professional presence.",
  },

  {
    title: "Business Websites",
    icon: Globe,
    desc: "Service pages designed to convert visitors into clients.",
  },

  {
    title: "Blogs",
    icon: BookOpen,
    desc: "SEO optimized content platforms.",
  },

  {
    title: "Online Stores",
    icon: Store,
    desc: "eCommerce with payments and administration.",
  },

  {
    title: "ERP Systems",
    icon: Database,
    desc: "Internal management systems for businesses.",
  },
];

export default function Page() {
  return (
    <section className="min-h-screen bg-background text-foreground flex flex-col md:mt-32 mt-24 items-center justify-center font-sans md:mr-8 md:ml-8">
      {/* HERO */}

      <div className="container pb-28 px-4">
        <div className="max-w-4xl">
          <p className=" inline-flex bg-indigo-500/10 text-indigo-500 px-4 py-2 rounded-full text-sm mb-6 ">
            Web Development Services
          </p>

          <h1 className=" text-5xl md:text-7xl font-bold leading-tight ">
            Custom websites built for
            <span className="text-indigo-500">
              {" "}
              businesses, brands and growth
            </span>
          </h1>

          <p className=" mt-8 text-muted-foreground text-lg leading-8 ">
            At <strong>QuarticCode</strong>, we create modern digital
            experiences: business websites, personal pages, blogs, eCommerce and
            ERP systems focused on performance, scalability and SEO.
          </p>

          <div className="mt-10 flex gap-4">
            <Link
              href="/contact"
              className=" bg-indigo-600 hover:bg-indigo-500 px-6 py-3 rounded-lg text-white font-medium "
            >
              Start a project
            </Link>

            <Link href="/portfolio" className=" border px-6 py-3 rounded-lg ">
              View portfolio
            </Link>
          </div>
        </div>
      </div>

      {/* SERVICES */}

      <section className="container py-20 px-4">
        <h2 className="text-4xl font-bold">What can we build?</h2>

        <div className=" grid md:grid-cols-3 gap-6 mt-10 ">
          {services.map((item) => {
            const Icon = item.icon;

            return (
              <Card key={item.title}>
                <CardHeader>
                  <Icon className=" h-8 w-8 text-indigo-500 mb-4 " />

                  <CardTitle>{item.title}</CardTitle>

                  <CardDescription>{item.desc}</CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </section>

      {/* BENEFITS */}

      <section className=" container pt-24 px-4">
        <h2 className=" text-4xl font-bold mb-10 ">Why choose QuarticCode?</h2>

        <div className="flex flex-row space-y-6 gap-4 flex-wrap">
          {[
            "SEO optimized",
            "Responsive design",
            "Fast loading",
            "Scalable architecture",
            "Modern technologies",
            "Maintenance support",
          ].map((item) => (
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

      <section className=" container py-24 px-4">
        <h2 className=" text-4xl font-bold mb-10 ">How we work</h2>

        <div className=" grid md:grid-cols-4 gap-6 ">
          {["Requirements", "Design", "Development", "Deployment"].map(
            (step) => (
              <Card key={step}>
                <CardContent className="pt-6">
                  <p className="font-semibold">{step}</p>
                </CardContent>
              </Card>
            ),
          )}
        </div>
      </section>

      {/* CTA */}

      <section className=" container pb-28 px-4">
        <Card className="border-indigo-500/20">
          <CardContent className=" py-16 text-center ">
            <h2 className=" text-4xl font-bold ">
              Ready to build your next project?
            </h2>

            <p className=" text-muted-foreground mt-4 ">
              Let&apos;s create a website that helps your business grow.
            </p>

            <Link
              href="/contact"
              className=" items-center inline-flex bg-indigo-600 gap-2 mt-8 hover:bg-indigo-500 py-3 px-6 text-white rounded-lg"
            >
              Contact QuarticCode
              <ArrowRight size={18} />
            </Link>
          </CardContent>
        </Card>
      </section>
    </section>
  );
}
