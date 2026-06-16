"use client";
import { useTranslations } from "next-intl";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "@/src/i18n/navigation";

export function ProjectContainer() {
  const t = useTranslations("Projects.container");
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <section
        className="flex lg:flex-row flex-col lg:w-4xl md:w-2xl w-screen gap-8 my-16 px-4"
        id="projects"
      >
        <Card className="flex flex-col gap-4 border-2 w-full bg-linear-to-br from-purple-500/20 via-purple-500/40 to-blue-500/30">
          <CardHeader>
            <CardTitle className="text-4xl">{t("title")}</CardTitle>
            <CardDescription className="text-lg">
              {t("description")}
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Link href={"/projects"}>
            <Button size="lg" className="group text-base px-8 h-12">
              {t("link")} 
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            </Link>
          </CardFooter>
        </Card>
      </section>
    </motion.div>
  );
}
