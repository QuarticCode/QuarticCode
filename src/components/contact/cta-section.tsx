// src/components/contact/cta-section.tsx
"use client";

import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ContactDialog } from "./contact-dialog";

export function CtaSection() {
  return (
    <section className="py-20 bg-secondary/50 border-y border-border">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-foreground">
            ¿Listo para comenzar tu proyecto?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Transformemos tus ideas en realidad. Contáctanos hoy mismo para una
            cotización personalizada sin compromiso.
          </p>

          {/* Envolver el botón en el Dialog Trigger */}
          <ContactDialog>
            <Button size="lg" className="group text-base px-8 h-12">
              Solicitar Presupuesto
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </ContactDialog>
        </motion.div>
      </div>
    </section>
  );
}
