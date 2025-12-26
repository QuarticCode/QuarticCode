import { useTranslations } from "next-intl";
import BackgroundMeteors from "../ui/backgroundmeteors";

export function MockUp() {
  const t = useTranslations("MockUp");
  return (
    <BackgroundMeteors>
      <h2 className="relative z-20 text-center font-bold text-black dark:text-white font-sans tracking-tight text-[clamp(1.5rem,5vw,6rem)]">
        <span className="md:text-8xl text-4xl">{t("b1")}</span>
        <br />
        <div className="relative mx-auto inline-block w-max filter-[drop-shadow(0px_1px_3px_rgba(27,37,80,0.14))]">
          <div className="bg-clip-text text-transparent bg-no-repeat bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 py-4">
            <span className="md:text-8xl text-4xl">{t("b2")}</span>
          </div>
        </div>
      </h2>
    </BackgroundMeteors>
  );
}
