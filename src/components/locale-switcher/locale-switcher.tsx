"use client";

import { useLocale, useTranslations } from "next-intl";
import LocaleTrigger from "./locale-trigger";
import LocaleItem from "./locale-item";
import { useLocaleSwitch } from "@/src/hooks/use-locale-switch";
import { routing } from "@/src/i18n/routing";
import { DropdownMenu, DropdownMenuContent } from "../ui/dropdown-menu";

export default function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");
  const locale = useLocale();
  const { handleLocaleChange, isPending } = useLocaleSwitch();

  return (
    <DropdownMenu>
      <LocaleTrigger
        locale={locale}
        isPending={isPending}
        label={t("locale", { locale })}
      />
      <DropdownMenuContent align="end" className="w-48">
        {routing.locales.map((currentLocale) => (
          <LocaleItem
            key={currentLocale}
            locale={currentLocale}
            currentLocale={locale}
            isPending={isPending}
            onClick={() => handleLocaleChange(currentLocale)}
            label={t("locale", { locale: currentLocale })}
          />
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
