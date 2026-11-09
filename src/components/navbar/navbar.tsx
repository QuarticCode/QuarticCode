import Image from "next/image";
import { SheetMenu } from "./sheet-menu";
import { NavbarItems } from "./navbar-items";
import ThemeSelector from "../theme/theme-selector";
import { Link } from "@/src/i18n/navigation";

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="border-b border-border/60 bg-background/75 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6 lg:h-[4.5rem]">
          <Link
            href="/"
            className="group flex items-center gap-2.5"
            aria-label="QuarticCode"
          >
            <Image
              src="/logo.svg"
              alt=""
              width={36}
              height={28}
              className="h-7 w-auto transition-transform duration-200 group-hover:scale-105"
              priority
            />
            <span className="text-[0.95rem] font-semibold tracking-tight">
              QuarticCode
            </span>
          </Link>

          <nav className="hidden md:block" aria-label="Main">
            <NavbarItems />
          </nav>

          <div className="flex items-center gap-2">
            <ThemeSelector />
            <div className="md:hidden">
              <SheetMenu child={<NavbarItems />} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
