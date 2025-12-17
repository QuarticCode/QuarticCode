import { Button } from "@/src/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
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
        <Button variant="outline">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{t("menu")}</SheetTitle>
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
