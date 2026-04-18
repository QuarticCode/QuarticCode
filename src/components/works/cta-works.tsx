// src/components/works/cta-works.tsx
"use client";

import { Link } from "@/src/i18n/navigation";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

export function CtaWorks() {
  const t = useTranslations("Works");
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <section className="my-16 py-20 md:px-32 px-0 relative bg-secondary/50 border-y border-border rounded-2xl z-1 overflow-hidden   ">
        <canvas className="particle h-80 w-80 rounded-full bg-purple-500/50 absolute blur-2xl -translate-x-full -z-1 left-20 top-0" />
        <canvas className="particle h-80 w-80 rounded-full bg-blue-500/50 absolute blur-2xl translate-x-full -z-1 right-20 end-0" />
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-foreground">
            {t("cta-title")}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            {t("cta-description")}
          </p>

          <Link href={"/works"}>
            <Button size="lg" className="group text-base px-8 h-12">
              {t("cta-link")}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </section>
    </motion.div>
  );
}
