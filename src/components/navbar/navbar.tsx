import Image from "next/image";
import { Button } from "../ui/button";
import LocaleSwitcher from "../locale-switcher/locale-switcher";
import { useTranslations } from "next-intl";

export function Navbar() {
  const t = useTranslations("Navbar");
  return (
    <nav className="flex flex-row justify-evenly items-center fixed top-0 left-0 right-0 backdrop-blur-2xl">
      <Image
        className="dark:invert"
        src="/logo.svg"
        alt="Next.js logo"
        width={100}
        height={20}
        priority
      />
      <section className="flex flex-row justify-evenly items-center gap-4">
        <Button variant="ghost">{t("home")}</Button>
        <Button variant="ghost">{t("services")}</Button>
        <Button variant="ghost">{t("experience")}</Button>
        <Button variant="ghost">{t("contact")}</Button>
        <LocaleSwitcher />
      </section>
    </nav>
  );
}
