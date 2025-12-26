"use client";

import { useTheme } from "next-themes";
import { DropdownMenuItem } from "../ui/dropdown-menu";
import { useEffect } from "react";
import { useTranslations } from "next-intl";

export function ThemeItem({
  themeSelector,
}: Readonly<{
  themeSelector: "light" | "dark" | "system";
}>) {
  const t = useTranslations("ThemeItems");
  const { setTheme, theme } = useTheme();

  useEffect(() => {
    if (theme === undefined) setTheme("system");
  });

  return (
    <DropdownMenuItem
      onClick={() => setTheme(themeSelector)}
      className={`${theme === themeSelector ? "text-foreground bg-muted" : "bg-transparent"}`}
    >
      {t(themeSelector)}
    </DropdownMenuItem>
  );
}
