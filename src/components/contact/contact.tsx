import ContactForm from "./contact-form";
import { useTranslations } from "next-intl";
import { Clock, BadgeCheck } from "lucide-react";

export const Contact = () => {
  const t = useTranslations("Contact");
  const tc = useTranslations("ContactPage");

  return (
    <section className="section" id="contact">
      <div className="container-page grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-16">
        <div className="lg:sticky lg:top-28">
          <span className="eyebrow">05 — {t("badge")}</span>
          <h2 className="mt-4 text-balance text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
            {t("title")}
          </h2>
          <p className="mt-5 max-w-[46ch] text-pretty text-lg leading-relaxed text-muted-foreground">
            {t("form.description")}
          </p>

          <div className="mt-8 space-y-5 border-t border-border pt-6">
            <div className="flex items-start gap-3">
              <Clock className="mt-0.5 size-4 shrink-0 text-brand" />
              <div>
                <p className="text-sm font-medium">{tc("responseTime")}</p>
                <p className="text-sm text-muted-foreground">
                  {tc("responseTimeText")}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <BadgeCheck className="mt-0.5 size-4 shrink-0 text-brand" />
              <div>
                <p className="text-sm font-medium">{tc("freeEstimates")}</p>
                <p className="text-sm text-muted-foreground">
                  {tc("freeEstimatesText")}
                </p>
              </div>
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
};
