"use client";

import { motion } from "framer-motion";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiAstro,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiPostgresql,
  SiSupabase,
  SiDocker,
  SiVercel,
  SiCloudinary,
  SiExpo,
  SiFigma,
} from "react-icons/si";
import { useTranslations } from "next-intl";

type TechItem = {
  name: string;
  icon: React.ElementType;
};

type TechCategory = {
  title: string;
  items: TechItem[];
};

const techStack: TechCategory[] = [
  {
    title: "s1",
    items: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "React", icon: SiReact },
      { name: "TypeScript", icon: SiTypescript },
      { name: "TailwindCSS", icon: SiTailwindcss },
      { name: "Astro", icon: SiAstro },
    ],
  },
  {
    title: "s2",
    items: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express", icon: SiExpress },
      { name: "Python", icon: SiPython },
    ],
  },
  {
    title: "s3",
    items: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Supabase", icon: SiSupabase },
    ],
  },
  {
    title: "s4",
    items: [
      { name: "Docker", icon: SiDocker },
      { name: "Vercel", icon: SiVercel },
      { name: "Cloudinary", icon: SiCloudinary },
    ],
  },
  {
    title: "s5",
    items: [{ name: "Expo", icon: SiExpo }],
  },
  {
    title: "s6",
    items: [{ name: "Figma", icon: SiFigma }],
  },
];

export default function TechStackSection() {
  const t = useTranslations("Tech");

  return (
    <section className="section relative border-y border-border bg-surface-2/40">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
          className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-end"
        >
          <div>
            <span className="eyebrow">02 — {t("badge")}</span>
            <h2 className="mt-4 max-w-xl text-balance text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
              {t("title")}
            </h2>
          </div>
          <p className="max-w-[52ch] text-pretty leading-relaxed text-muted-foreground lg:justify-self-end">
            {t("description")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.05 }}
          viewport={{ once: true }}
          className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3"
        >
          {techStack.map((category, index) => (
            <div key={category.title} className="bg-background p-6 sm:p-7">
              <div className="flex items-center justify-between gap-4">
                <h3 className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-muted-foreground">
                  {t(`Stacks.${category.title}`)}
                </h3>
                <span className="font-mono text-[0.7rem] text-muted-foreground/50">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <ul className="mt-5 flex flex-wrap gap-2">
                {category.items.map((tech) => {
                  const Icon = tech.icon;

                  return (
                    <li
                      key={tech.name}
                      className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-sm transition-colors hover:border-brand/40 hover:bg-brand-soft"
                    >
                      <Icon className="h-4 w-4 text-brand" />
                      <span className="font-medium">{tech.name}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </motion.div>

        <p className="mt-8 max-w-[65ch] text-sm leading-relaxed text-muted-foreground">
          {t("footer")}
        </p>
      </div>
    </section>
  );
}
