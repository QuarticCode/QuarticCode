"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@/src/i18n/navigation";

export function ProjectContainer() {
  const t = useTranslations("Projects.container");
  const tp = useTranslations("Projects");

  const projects = [
    { title: tp("p1.title"), meta: "Web" },
    { title: tp("p2.title"), meta: "App" },
    { title: tp("p3.title"), meta: "Tool" },
  ];

  return (
    <section id="projects" className="section">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="surface-panel relative overflow-hidden p-8 sm:p-12 lg:p-14"
        >
          <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-brand/10 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
            <div>
              <span className="eyebrow">04 — {t("badge")}</span>
              <h2 className="mt-4 max-w-2xl text-balance text-3xl font-semibold tracking-[-0.04em] sm:text-4xl lg:text-5xl">
                {t("title")}
              </h2>
              <p className="mt-5 max-w-[65ch] text-pretty leading-relaxed text-muted-foreground">
                {t("description")}
              </p>

              <Button
                asChild
                size="lg"
                className="group mt-8 h-12 rounded-full bg-brand px-7 text-base font-semibold text-brand-foreground hover:bg-brand/90"
              >
                <Link href="/projects">
                  {t("link")}
                  <ArrowUpRight className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </Button>
            </div>

            <div className="relative hidden lg:block">
              <div className="rounded-2xl border border-border bg-background/70 p-2 backdrop-blur">
                {projects.map((project, index) => (
                  <div
                    key={project.title}
                    className="flex items-center justify-between gap-4 rounded-xl px-4 py-3.5 transition-colors hover:bg-surface-2"
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-muted-foreground/60">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-sm font-medium">
                        {project.title}
                      </span>
                    </div>
                    <span className="rounded-full border border-border px-2 py-0.5 font-mono text-[0.65rem] uppercase tracking-[0.12em] text-muted-foreground">
                      {project.meta}
                    </span>
                  </div>
                ))}
              </div>
              <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl border border-border/60" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
