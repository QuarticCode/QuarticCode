import type { Metadata } from "next";
import Link from "next/link";

import { Card, CardContent } from "@/src/components/ui/card";

import { Linkedin, LucideIcon, Mail, MessageCircle, Send } from "lucide-react";
import ContactForm from "@/src/components/contact/contact-form";

/* ======================
   Metadata
====================== */

export const metadata: Metadata = {
  title: "Contact | QuarticCode",

  description:
    "Get in touch with QuarticCode for web development, ERP systems, eCommerce and custom software solutions.",

  alternates: {
    canonical: "https://quarticcode.com/contact",
  },

  openGraph: {
    title: "Contact | QuarticCode",

    description: "Start your next digital project with QuarticCode.",

    url: "https://quarticcode.com/contact",

    siteName: "QuarticCode",

    type: "website",
  },
};

/* ======================
   Types
====================== */

type ContactMethod = {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
};

/* ======================
   Data
====================== */

const contactMethods: ContactMethod[] = [
  {
    title: "Email",
    description: "Send us detailed project information.",
    href: "mailto:contact@quarticcode.com",
    icon: Mail,
  },

  {
    title: "Telegram",
    description: "Fast communication for projects.",
    href: "https://t.me/TUUSUARIO",
    icon: Send,
  },

  {
    title: "WhatsApp",
    description: "Quick estimates and support.",
    href: "https://wa.me/TUNUMERO",
    icon: MessageCircle,
  },

  {
    title: "LinkedIn",
    description: "Professional network.",
    href: "https://linkedin.com/in/TUPERFIL",
    icon: Linkedin,
  },
];

/* ======================
   Page
====================== */

export default function ContactPage() {
  return (
    <section className="min-h-screen bg-background text-foreground  flex flex-col md:mt-32 mt-24 items-center justify-center font-sans md:mr-8 md:ml-8">
      <div className="container py-24">
        {/* ======================
            Hero
        ====================== */}

        <header className="max-w-3xl mb-20">
          <span
            className="
            inline-flex
            rounded-full
            bg-indigo-500/10
            px-4 py-2
            text-sm
            text-indigo-500
          "
          >
            Contact QuarticCode
          </span>

          <h1
            className="
            mt-6
            text-5xl
            font-bold
            leading-tight
            md:text-7xl
          "
          >
            Let&apos;s build your{" "}
            <span className="text-indigo-500">next project</span>
          </h1>

          <p
            className="
            mt-6
            text-lg
            leading-8
            text-muted-foreground
          "
          >
            Need a website, ERP, eCommerce or custom software solution? Tell us
            about your idea.
          </p>
        </header>

        {/* ======================
            Main Grid
        ====================== */}

        <div className="flex flex-row flex-wrap justify-center items-start">
          {/* ======================
              Contact Form
          ====================== */}

          <ContactForm />

          {/* ======================
              Contact Methods
          ====================== */}

          <div>
            <h2
              className="
              mb-8
              text-3xl
              font-bold
            "
            >
              Other ways to contact us
            </h2>

            <div className="space-y-5 flex flex-col gap-2">
              {contactMethods.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.title}
                    href={item.href}
                    target="_blank"
                    className="py-4"
                  >
                    <Card
                      className="
                      transition-colors
                      hover:border-indigo-500
                    "
                    >
                      <CardContent
                        className="
                        flex
                        items-center
                        gap-5
                        pt-6
                      "
                      >
                        <Icon
                          className="
                            h-7
                            w-7
                            text-indigo-500
                          "
                        />

                        <div>
                          <h3 className="font-semibold">{item.title}</h3>

                          <p
                            className="
                            text-sm
                            text-muted-foreground
                          "
                          >
                            {item.description}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>

            {/* FAQ */}

            <div
              className="
              mt-12
              space-y-6
            "
            >
              <div>
                <h3 className="font-semibold">Response time</h3>

                <p className="text-muted-foreground">
                  Usually within 24 hours.
                </p>
              </div>

              <div>
                <h3 className="font-semibold">Free estimates?</h3>

                <p className="text-muted-foreground">
                  Yes, all project estimates are free.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ======================
            Bottom CTA
        ====================== */}

        <Card
          className="
          mt-24
          border-indigo-500/20
        "
        >
          <CardContent
            className="
            py-16
            text-center
          "
          >
            <h2
              className="
              text-4xl
              font-bold
            "
            >
              Ready to start?
            </h2>

            <p
              className="
              mt-4
              text-muted-foreground
            "
            >
              Your idea deserves more than a template. Build something scalable
              with QuarticCode.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
