"use client";

import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { ContactDialog } from "./contact-dialog";
import { useTranslations } from "next-intl";

export function CtaSection() {
  const t = useTranslations("Services.cta");

  return (
    <section className="pb-24">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative overflow-hidden rounded-3xl border border-border bg-surface p-8 sm:p-12 lg:p-14"
        >
          <div className="absolute -right-20 -top-20 size-72 rounded-full bg-brand/10 blur-3xl" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent" />

          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="max-w-2xl text-balance text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                {t("title")}
              </h2>
              <p className="mt-4 max-w-[60ch] text-pretty leading-relaxed text-muted-foreground">
                {t("description")}
              </p>
            </div>

            <ContactDialog>
              <Button
                size="lg"
                className="group h-12 rounded-full bg-brand px-7 text-base font-semibold text-brand-foreground hover:bg-brand/90"
              >
                {t("link")}
                <ArrowUpRight className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Button>
            </ContactDialog>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
