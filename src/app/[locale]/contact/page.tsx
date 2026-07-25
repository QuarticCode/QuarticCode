import Link from "next/link";

import { Card, CardContent } from "@/src/components/ui/card";

import { Mail, MessageCircle, Send } from "lucide-react";
import ContactForm from "@/src/components/contact/contact-form";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "ContactPage" });

  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
    alternates: {
      canonical: "https://quarticcode.com/contact",
    },
    openGraph: {
      title: t("metadata.title"),
      description: t("metadata.description"),
      url: "https://quarticcode.com/contact",
      siteName: "QuarticCode",
      type: "website",
    },
  };
}

/* ======================
   Page
====================== */

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "ContactPage" });

  const methods = [
    {
      title: t("methods.email.title"),
      description: t("methods.email.description"),
      href: "mailto:contact@quarticcode.com",
      icon: Mail,
    },
    {
      title: t("methods.telegram.title"),
      description: t("methods.telegram.description"),
      href: "https://t.me/TUUSUARIO",
      icon: Send,
    },
    {
      title: t("methods.whatsapp.title"),
      description: t("methods.whatsapp.description"),
      href: "https://wa.me/+5355153703",
      icon: MessageCircle,
    },
  ];

  return (
    <section className="min-h-screen text-foreground  flex flex-col md:mt-32 mt-24 items-center justify-center font-sans md:mr-8 md:ml-8">
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
            {t("badge")}
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
            {t("titlePrefix")}{" "}
            <span className="text-indigo-500">{t("titleHighlight")}</span>
          </h1>

          <p
            className="
            mt-6
            text-lg
            leading-8
            text-muted-foreground
          "
          >
            {t("subtitle")}
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
              {t("otherWays")}
            </h2>

            <div className="space-y-5 flex flex-col gap-2">
              {methods.map((item) => {
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
                <h3 className="font-semibold">{t("responseTime")}</h3>

                <p className="text-muted-foreground">
                  {t("responseTimeText")}
                </p>
              </div>

              <div>
                <h3 className="font-semibold">{t("freeEstimates")}</h3>

                <p className="text-muted-foreground">
                  {t("freeEstimatesText")}
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
              {t("ctaTitle")}
            </h2>

            <p
              className="
              mt-4
              text-muted-foreground
            "
            >
              {t("ctaDescription")}
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
