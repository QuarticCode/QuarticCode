"use client";

import { Link } from "@/src/i18n/navigation";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";

export function CtaWorks() {
  const t = useTranslations("Works");

  return (
    <section className="relative overflow-hidden border-y border-border bg-surface-2/50">
      <div className="bg-grid absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]" />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="container-page py-16 sm:py-20"
      >
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <span className="eyebrow">03 — {t("title")}</span>
            <h2 className="mt-4 max-w-[24ch] text-balance text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
              {t("cta-title")}
            </h2>
            <p className="mt-4 max-w-[60ch] text-pretty leading-relaxed text-muted-foreground">
              {t("cta-description")}
            </p>
          </div>

          <Button
            asChild
            size="lg"
            className="group h-12 rounded-full bg-brand px-7 text-base font-semibold text-brand-foreground hover:bg-brand/90"
          >
            <Link href="/works">
              {t("cta-link")}
              <ArrowUpRight className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
