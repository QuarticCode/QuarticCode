import { cn } from "@/src/lib/utils";
import { DropdownMenuItem } from "../ui/dropdown-menu";
import FlagIcon from "./flag-icon";
import { Check } from "lucide-react";

interface LocaleItemProps {
  locale: string;
  currentLocale: string;
  isPending: boolean;
  onClick: () => void;
  label: string;
}

export default function LocaleItem({
  locale,
  currentLocale,
  isPending,
  onClick,
  label,
}: LocaleItemProps) {
  const isActive = locale === currentLocale;

  return (
    <DropdownMenuItem
      onClick={onClick}
      disabled={isPending}
      className={cn(
        "flex items-center justify-between py-2",
        isActive && "bg-accent"
      )}
    >
      <div className="flex items-center gap-3">
        <FlagIcon locale={locale} />
        <div className="flex flex-col">
          <span className="text-sm font-medium">{label}</span>
          <span className="text-xs text-muted-foreground">
            {locale.toUpperCase()}
          </span>
        </div>
      </div>
      {isActive && <Check className="h-4 w-4 text-primary" />}
    </DropdownMenuItem>
  );
}
