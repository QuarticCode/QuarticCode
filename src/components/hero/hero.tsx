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

          <Link href={"/projects"} className="z-30">
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

// <section className="flex lg:flex-row flex-col justify-evenly items-center dark:text-white text-black md:p-8 p-2 m-4 md:w-full w-screen md:gap-0 gap-16">
//   <div className="flex flex-col md:max-w-md w-full gap-8">
//     <div className="h-64 w-64 relative md:top-20 sm:top-10 top-0 justify-self-center">
//       <Image
//         width={80}
//         height={80}
//         className="w-64 h-64 z-1"
//         src={"/logo.svg"}
//         alt="Contact Logo"
//       />
//       <Image
//         width={80}
//         height={80}
//         className="w-64 h-64 absolute z-0 blur-3xl top-0"
//         src={"/logo.svg"}
//         alt="Contact Logo"
//       />
//     </div>
//     {/* <Logo image={"/logo.svg"} /> */}
//     <p className="lg:text-xl md:text-lg sm:text-sm font-light">
//       {t("description")}
//     </p>
//   </div>
//   <section className="flex flex-col items-center justify-center md:max-w-md w-full gap-8">
//     <h1 className="text-4xl md:text-7xl font-bold text-center  mb-4">
//       {t("morphoText.title")}
//     </h1>
//     <MorphoTextFlip
//       words={[
//         t("morphoText.words.w1"),
//         t("morphoText.words.w2"),
//         t("morphoText.words.w3"),
//       ]}
//       textClassName="text-4xl md:text-7xl text-indigo-600 dark:text-indigo-400 font-bold mt-1"
//       animationType="slideRotate"
//     />
//   </section>
// </section>
