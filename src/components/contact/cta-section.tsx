// src/components/contact/cta-section.tsx
"use client";

import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ContactDialog } from "./contact-dialog";
import Background from "../icons/background";
import { useTranslations } from "next-intl";

export function CtaSection() {
  const t = useTranslations("Services.cta"); // Para traducciones específicas de esta sección

  return (
    <section className="py-20 relative bg-secondary/50 border-y border-border">
      <Background
        className="top-0 left-0 w-full h-full blur-3xl absolute -z-1"
        colorLeft="#4333d8"
        colorRight="#3245FF"
      />
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-foreground">
            {t("title")}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            {t("description")}
          </p>

          {/* Envolver el botón en el Dialog Trigger */}
          <ContactDialog>
            <Button size="lg" className="group text-base px-8 h-12">
              {t("link")}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </ContactDialog>
        </motion.div>
      </div>
    </section>
  );
}
