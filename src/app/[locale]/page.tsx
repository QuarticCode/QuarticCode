import { Hero } from "@/src/components/hero/hero";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Home.Hero");
  return (
    <div className="flex md:mt-32 mt-24 items-center justify-center bg-zinc-50 dark:bg-transparent font-sans md:mr-8 md:ml-8 mr-2 ml-2">
      <Hero
        image="/logo.svg"
        title={t("title")}
        description={t("description")}
      />
    </div>
  );
}
