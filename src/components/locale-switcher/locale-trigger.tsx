import { ChevronDown } from "lucide-react";
import { Button } from "../ui/button";
import { DropdownMenuTrigger } from "../ui/dropdown-menu";
import FlagIcon from "./flag-icon";
import LoadingIndicator from "./loading-indicator";

interface LocaleTriggerProps {
  locale: string;
  isPending: boolean;
  label: string;
}

export default function LocaleTrigger({
  locale,
  isPending,
  label,
}: LocaleTriggerProps) {
  return (
    <DropdownMenuTrigger asChild>
      <Button
        variant="outline"
        className="relative h-9 w-full justify-between gap-2 rounded-full border-border/70 bg-transparent pl-2.5 pr-3 md:w-auto"
        disabled={isPending}
      >
        <div className="flex items-center gap-2">
          <FlagIcon locale={locale} />
          <span className="text-sm font-medium">{label}</span>
        </div>
        <ChevronDown className="h-3 w-3 opacity-50" />
        {isPending && <LoadingIndicator />}
      </Button>
    </DropdownMenuTrigger>
  );
}
