import { useTranslations } from "next-intl";
import { BeamsUpstream } from "../ui/beams-upstream";
import { MorphoTextFlip } from "../ui/morphotextflip";
import { Logo } from "./logo";

export function Hero() {
  const t = useTranslations("Home.Hero");
  return (
    <div className="relative h-full w-full flex justify-center items-center">
      <section className="flex md:flex-row flex-col justify-center items-center dark:text-white text-black md:p-8 p-2 m-4 md:gap-8 gap-2 md:w-2xl w-screen">
        <div className="flex flex-col md:min-w-md w-full gap-8">
          <Logo image={"/logo.svg"} />
          <p className="lg:text-xl md:text-lg sm:text-sm font-light">
            {t("description")}
          </p>
        </div>
        <section className="flex flex-col items-center justify-center h-100 min-w-full  px-4">
          <h1 className="text-4xl md:text-7xl font-bold text-center  mb-4">
            {t("morphoText.title")}
          </h1>
          <MorphoTextFlip
            words={[
              t("morphoText.words.w1"),
              t("morphoText.words.w2"),
              t("morphoText.words.w3"),
            ]}
            textClassName="text-4xl md:text-7xl text-indigo-600 dark:text-indigo-400 font-bold mt-1"
            animationType="slideRotate"
          />
        </section>
      </section>
      <BeamsUpstream className="z-0" />
    </div>
  );
}
