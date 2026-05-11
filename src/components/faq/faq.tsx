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
    <section className="relative overflow-hidden py-24">
      {/* Glow */}
      <div className="absolute right-0 top-1/2 -z-10 h-87.5 w-87.5 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="mb-4 inline-flex rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-1 text-sm font-medium text-indigo-400">
            {t("badge")}
          </span>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            {t("title")}
          </h2>

          <p className="mt-6 text-lg text-muted-foreground">
            {t("description")}
          </p>
        </motion.div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl"
        >
          <div className="rounded-3xl border border-border/50 bg-background/60 p-4 backdrop-blur-xl md:p-6">
            <Accordion type="single" collapsible className="w-full">
              {[1, 2, 3, 4, 5, 6].map((index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-b border-border/40 last:border-none"
                >
                  <AccordionTrigger className="py-6 text-left text-base font-medium transition-colors hover:text-indigo-400">
                    {t(`faqs.f${index}.q`)}
                  </AccordionTrigger>

                  <AccordionContent className="pb-6 pr-4 text-muted-foreground leading-relaxed">
                    {t(`faqs.f${index}.a`)}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </motion.div>

        {/* Bottom text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          viewport={{ once: true }}
          className="mx-auto mt-12 max-w-2xl text-center"
        >
          <p className="text-sm text-muted-foreground">{t("footer")}</p>
        </motion.div>
      </div>
    </section>
  );
}
