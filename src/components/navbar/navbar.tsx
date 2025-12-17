import Image from "next/image";
import { SheetMenu } from "./sheet-menu";
import { NavbarItems } from "./navbar-items";

export function Navbar() {
  return (
    <nav className="flex flex-row md:justify-evenly justify-evenly items-center fixed top-0 left-0 right-0 backdrop-blur-2xl">
      <Image
        src="/logo.svg"
        alt="QuarticCode logo"
        width={100}
        height={20}
        priority
      />
      <section className="md:flex hidden">
        <NavbarItems />
      </section>
      <SheetMenu child={<NavbarItems />} />
    </nav>
  );
}
