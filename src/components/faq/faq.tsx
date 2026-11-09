"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { useTranslations } from "next-intl";

export default function FAQSection() {
  const t = useTranslations("FAQ");

  return (
    <section className="section border-t border-border">
      <div className="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <span className="eyebrow">06 — {t("badge")}</span>
          <h2 className="mt-4 text-balance text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
            {t("title")}
          </h2>
          <p className="mt-5 max-w-[46ch] text-pretty leading-relaxed text-muted-foreground">
            {t("description")}
          </p>
          <p className="mt-8 max-w-[42ch] text-sm leading-relaxed text-muted-foreground">
            {t("footer")}
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Accordion
            type="single"
            collapsible
            className="w-full border-t border-border"
          >
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-border"
              >
                <AccordionTrigger className="py-5 text-left text-base font-medium transition-none hover:text-brand">
                  {t(`faqs.f${index}.q`)}
                </AccordionTrigger>

                <AccordionContent className="pr-6 pb-5 text-sm leading-relaxed text-muted-foreground">
                  {t(`faqs.f${index}.a`)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
