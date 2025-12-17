import { useTranslations } from "next-intl";
import LocaleSwitcher from "../locale-switcher/locale-switcher";
import ThemeSelector from "../theme/theme-selector";
import { Button } from "../ui/button";

export function NavbarItems() {
  const t = useTranslations("Navbar");
  return (
    <section className="flex md:flex-row flex-col md:justify-evenly md:items-center justify-center items-start md:p-0 p-8 gap-4">
      <Button variant="ghost">{t("home")}</Button>
      <Button variant="ghost">{t("services")}</Button>
      <Button variant="ghost">{t("experience")}</Button>
      <Button variant="ghost">{t("contact")}</Button>
      <LocaleSwitcher />
      <ThemeSelector />
    </section>
  );
}
