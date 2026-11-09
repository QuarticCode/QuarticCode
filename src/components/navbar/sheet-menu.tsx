import { Button } from "@/src/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/src/components/ui/sheet";
import { Menu } from "lucide-react";
import { useTranslations } from "next-intl";

type Props = {
  child: React.ReactNode;
};

export function SheetMenu({ child }: Props) {
  const t = useTranslations("Navbar.Sheet");
  return (
    <Sheet>
      <SheetTrigger asChild className="md:hidden flex">
        <Button
          variant="outline"
          size="icon"
          className="size-9 rounded-full border-border/70 bg-transparent"
        >
          <Menu className="h-[1.1rem] w-[1.1rem]" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{t("menu")}</SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        {child}
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="outline">{t("close")}</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
