import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/src/components/ui/dropdown-menu";
import { ThemeItem } from "./theme-item";
import { useTranslations } from "next-intl";
import { Button } from "../ui/button";
import { Moon, Sun } from "lucide-react";

export default function ThemeSelector() {
  const t = useTranslations("ThemeItems");
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <span className="sr-only">{t("label")}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <ThemeItem themeSelector="light" />
        <ThemeItem themeSelector="dark" />
        <ThemeItem themeSelector="system" />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
