import { useTranslations } from "next-intl";
import { BeamsUpstream } from "../ui/beams-upstream";
import { MorphoTextFlip } from "../ui/morphotextflip";
import { Button } from "../ui/button";
import { Link } from "@/src/i18n/navigation";
import { ContactDialog } from "../contact/contact-dialog";

export function Hero() {
  const t = useTranslations("Home.Hero");
  return (
    <div
      className="relative h-full w-full flex justify-center items-center"
      data-aos={"fade-up"}
      data-aos-delay={"10"}
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
    >
      <section className="flex flex-col items-center justify-center text-center max-w-3xl gap-6">
        <h1 className="text-4xl md:text-7xl font-bold">{t("title")}</h1>

        <p className="text-lg md:text-xl text-gray-500 dark:text-gray-300">
          {t("subtitle")}
        </p>

        <MorphoTextFlip
          words={[
            t("morphoText.words.w1"),
            t("morphoText.words.w2"),
            t("morphoText.words.w3"),
          ]}
          textClassName="text-3xl md:text-5xl text-indigo-600 font-bold"
        />

        <div className="flex gap-4 mt-4">
          <ContactDialog>
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition z-30">
              {t("cta_primary")}
            </Button>
          </ContactDialog>

          <Link href={"/works"} className="z-30">
            <Button className="border border-gray-400 px-6 py-3 rounded-xl font-semibold hover:bg-gray-800 dark:hover:bg-gray-100  transition">
              {t("cta_secondary")}
            </Button>
          </Link>
        </div>
      </section>
      <BeamsUpstream className="z-0" />
    </div>
  );
}
