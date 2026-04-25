import { useTranslations } from "next-intl";
import { BeamsUpstream } from "../ui/beams-upstream";
import { MorphoTextFlip } from "../ui/morphotextflip";
import Image from "next/image";
// import { Logo } from "./logo";

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
      <section className="flex lg:flex-row flex-col justify-evenly items-center dark:text-white text-black md:p-8 p-2 m-4 md:w-full w-screen md:gap-0 gap-16">
        <div className="flex flex-col md:max-w-md w-full gap-8">
          <div className="h-64 w-64 relative md:top-20 sm:top-10 top-0 justify-self-center">
            <Image
              width={80}
              height={80}
              className="w-64 h-64 z-1"
              src={"/logo.svg"}
              alt="Contact Logo"
            />
            <Image
              width={80}
              height={80}
              className="w-64 h-64 absolute z-0 blur-3xl top-0"
              src={"/logo.svg"}
              alt="Contact Logo"
            />
          </div>
          {/* <Logo image={"/logo.svg"} /> */}
          <p className="lg:text-xl md:text-lg sm:text-sm font-light">
            {t("description")}
          </p>
        </div>
        <section className="flex flex-col items-center justify-center md:max-w-md w-full gap-8">
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
