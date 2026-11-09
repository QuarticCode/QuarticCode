"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Service } from "@/src/types/service";
import { useTranslations } from "next-intl";
import { Link } from "@/src/i18n/navigation";
import { cn } from "@/src/lib/utils";

interface ServiceCardProps {
  service: Service;
  link: string;
  index: number;
  featured?: boolean;
}

export function ServiceCard({
  service,
  link,
  index,
  featured = false,
}: ServiceCardProps) {
  const Icon = service.icon;
  const t = useTranslations("Services");

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.3,
        delay: Math.min(index * 0.05, 0.2),
        ease: "easeOut",
      }}
      className="h-full"
    >
      <article
        className={cn(
          "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface p-6 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-lg hover:shadow-brand/5 sm:p-7",
          featured && "lg:p-8",
        )}
      >
        <div className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-brand/10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />

        <div className="relative flex items-start justify-between gap-4">
          <span className="flex size-11 items-center justify-center rounded-xl border border-border bg-surface-2 text-brand">
            <Icon size={20} />
          </span>
          <span className="font-mono text-xs text-muted-foreground/60">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <h3
          className={cn(
            "relative mt-6 text-xl font-semibold tracking-tight",
            featured && "sm:text-2xl",
          )}
        >
          {t(service.title)}
        </h3>

        <p className="relative mt-2 max-w-[52ch] text-sm leading-relaxed text-muted-foreground">
          {t(service.description)}
        </p>

        <ul className="relative mt-5 flex flex-wrap gap-1.5">
          {service.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-border bg-background/60 px-2.5 py-1 text-[0.7rem] font-medium text-muted-foreground"
            >
              {tag}
            </li>
          ))}
        </ul>

        <div className="relative mt-auto pt-6">
          <Link
            href={link}
            className="inline-flex items-center gap-1.5 rounded-full py-1 text-sm font-medium text-brand"
          >
            {t("showMore")}
            <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </article>
    </motion.div>
  );
}
