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
import { Card, CardContent } from "../ui/card";
import { useTranslations } from "next-intl";

// import { Card, CardContent } from "@/components/ui/card";

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
    <section className="relative overflow-hidden py-24">

      {/* Glow */}
      <div className="absolute left-1/2 top-0 -z-10 h-100 w-100 -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
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

        {/* Categories */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {techStack.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: categoryIndex * 0.08,
              }}
              viewport={{ once: true }}
            >
              <Card className="group h-full border-border/50 bg-background/60 backdrop-blur-xl transition-all duration-300 hover:border-indigo-500/40 hover:shadow-[0_0_30px_rgba(6,182,212,0.08)]">
                <CardContent className="p-6">
                  <div className="mb-6 flex items-center justify-between">
                    <h3 className="text-xl font-semibold">
                      {t(`Stacks.${category.title}`)}
                    </h3>

                    <div className="h-px flex-1 bg-linear-to-r from-indigo-500/40 to-transparent ml-4" />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {category.items.map((tech, index) => {
                      const Icon = tech.icon;

                      return (
                        <motion.div
                          key={tech.name}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{
                            duration: 0.25,
                            delay: index * 0.05,
                          }}
                          viewport={{ once: true }}
                          className="flex items-center gap-3 rounded-xl border border-border/40 bg-muted/30 px-4 py-3 transition-all duration-300 hover:border-indigo-500/40 hover:bg-indigo-500/5"
                        >
                          <Icon className="h-5 w-5 text-indigo-400" />

                          <span className="text-sm font-medium">
                            {tech.name}
                          </span>
                        </motion.div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="mx-auto mt-16 max-w-2xl text-center"
        >
          <p className="text-muted-foreground">{t("footer")}</p>
        </motion.div>
      </div>
    </section>
  );
}
