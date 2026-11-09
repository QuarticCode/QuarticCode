import { useTranslations } from "next-intl";
import LocaleSwitcher from "../locale-switcher/locale-switcher";
import { Button } from "../ui/button";
import { Link } from "@/src/i18n/navigation";

const links = [
  { href: "/", key: "home" },
  { href: "/services", key: "services" },
  { href: "/works", key: "work" },
  { href: "/blog", key: null },
  { href: "/contact", key: "contact" },
] as const;

export function NavbarItems() {
  const t = useTranslations("Navbar");

  return (
    <section className="flex flex-col items-stretch gap-1 p-1 md:flex-row md:items-center md:gap-0.5 md:p-0">
      {links.map((link) => (
        <Button
          key={link.href}
          asChild
          variant="ghost"
          size="sm"
          className="justify-start rounded-full px-3.5 text-[0.9rem] font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground md:justify-center"
        >
          <Link href={link.href}>{link.key ? t(link.key) : "Blog"}</Link>
        </Button>
      ))}
      <div className="mt-2 md:mt-0 md:ml-2">
        <LocaleSwitcher />
      </div>
    </section>
  );
}
