import { useTranslations } from "next-intl";
import LocaleSwitcher from "../locale-switcher/locale-switcher";
import ThemeSelector from "../theme/theme-selector";
import { Button } from "../ui/button";
import { Link } from "@/src/i18n/navigation";

export function NavbarItems() {
  const t = useTranslations("Navbar");
  return (
    <section className="flex md:flex-row flex-col md:justify-evenly md:items-center justify-center items-start md:p-0 p-8 gap-4">
      <Link href={"/"}>
        <Button variant="ghost">{t("home")}</Button>
      </Link>
      <Link href={"/services"}>
        <Button variant="ghost">{t("services")}</Button>
      </Link>
      <Link href={"/works"}>
        <Button variant="ghost">{t("work")}</Button>
      </Link>
      <Link href={"/projects"}>
        <Button variant="ghost">{t("project")}</Button>
      </Link>
      <Link href={"/#contact"}>
        <Button variant="ghost">{t("contact")}</Button>
      </Link>
      <Button variant="ghost"></Button>
      <LocaleSwitcher />
      <ThemeSelector />
    </section>
  );
}
