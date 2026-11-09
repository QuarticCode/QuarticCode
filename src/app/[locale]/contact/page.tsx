import { Link } from "@/src/i18n/navigation";

import { Mail, MessageCircle, Send, ArrowUpRight, Clock, BadgeCheck } from "lucide-react";
import ContactForm from "@/src/components/contact/contact-form";
import { ContactDialog } from "@/src/components/contact/contact-dialog";
import { Button } from "@/src/components/ui/button";
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
      canonical: "https://quartic-code.com/contact",
    },
    openGraph: {
      title: t("metadata.title"),
      description: t("metadata.description"),
      url: "https://quartic-code.com/contact",
      siteName: "QuarticCode",
      type: "website",
    },
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "ContactPage" });
  const tc = await getTranslations({ locale, namespace: "Contact" });

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
    <main className="min-h-screen">
      <section className="pt-32 pb-24 md:pt-40">
        <div className="container-page">
          <header className="max-w-3xl">
            <span className="eyebrow">{t("badge")}</span>
            <h1 className="mt-5 text-balance text-[clamp(2.6rem,6vw,4.5rem)] font-semibold tracking-[-0.045em]">
              {t("titlePrefix")}{" "}
              <span className="text-brand">{t("titleHighlight")}</span>
            </h1>
            <p className="mt-6 max-w-[62ch] text-pretty text-lg leading-relaxed text-muted-foreground">
              {t("subtitle")}
            </p>
          </header>

          <div className="mt-14 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <h2 className="eyebrow">{t("otherWays")}</h2>

              <div className="mt-5 border-y border-border">
                {methods.map((item) => {
                  const Icon = item.icon;

                  return (
                    <Link
                      key={item.title}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-start gap-4 border-b border-border py-5 last:border-b-0"
                    >
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-border bg-surface text-brand">
                        <Icon className="size-4" />
                      </span>

                      <span className="min-w-0 flex-1">
                        <span className="block text-sm font-medium">
                          {item.title}
                        </span>
                        <span className="mt-0.5 block text-sm leading-relaxed text-muted-foreground">
                          {item.description}
                        </span>
                      </span>

                      <ArrowUpRight className="mt-1 size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </Link>
                  );
                })}
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-border bg-surface p-5">
                  <Clock className="size-4 text-brand" />
                  <p className="mt-3 text-sm font-medium">{t("responseTime")}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {t("responseTimeText")}
                  </p>
                </div>

                <div className="rounded-2xl border border-border bg-surface p-5">
                  <BadgeCheck className="size-4 text-brand" />
                  <p className="mt-3 text-sm font-medium">
                    {t("freeEstimates")}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {t("freeEstimatesText")}
                  </p>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>

          <div className="relative mt-20 overflow-hidden rounded-3xl border border-border bg-surface p-8 sm:p-12">
            <div className="absolute -right-20 -bottom-20 size-72 rounded-full bg-brand/10 blur-3xl" />

            <div className="relative grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <h2 className="text-balance text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                  {t("ctaTitle")}
                </h2>
                <p className="mt-3 max-w-[60ch] text-pretty leading-relaxed text-muted-foreground">
                  {t("ctaDescription")}
                </p>
              </div>

              <ContactDialog>
                <Button
                  size="lg"
                  className="h-12 rounded-full bg-brand px-7 text-base font-semibold text-brand-foreground hover:bg-brand/90"
                >
                  {tc("form.title")}
                </Button>
              </ContactDialog>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
