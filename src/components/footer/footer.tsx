import Image from "next/image";
import { Telegram } from "../icons/telegram";
import { Github } from "../icons/github";
import { Blog } from "../icons/blog";
import { Twitter } from "../icons/twitter";
import { LinkedIn } from "../icons/linkedin";
import { Envelop } from "../icons/envelop";
import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="bg-white dark:bg-black dark:text-white w-full">
      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="col-span-1 lg:col-span-1 space-y-4">
            <a href="#" className="flex items-center gap-2 group">
              <Image
                src={"/logo.svg"}
                width={80}
                height={80}
                alt="logo image"
              />
              <span className="text-xl font-semibold tracking-tight ">
                QuarticCode
              </span>
            </a>
            <p className="text-sm  leading-relaxed max-w-xs">
              {t("info")}
            </p>
          </div>

          {/* Contact Section */}
          <div className="col-span-1 space-y-6">
            <h3 className="text-sm font-semibold  uppercase tracking-wider">
              {t("columns.c1.title")}
            </h3>
            <ul className="space-y-4">
              <li className="group flex items-start gap-3">
                <div className="mt-1 group-hover:text-[#cc0000] transition-colors">
                  <Envelop />
                </div>
                <div className="space-y-1">
                  <a
                    href="mailto:quarticcode@gmail.com"
                    target="_blank"
                    className="text-sm hover:text-[#cc0000] font-medium transition-colors hover-underline-animation"
                  >
                    quarticcode@gmail.com
                  </a>
                  <p className="text-xs">{t("columns.c1.items.i1.info")}</p>
                </div>
              </li>

              <li className="group flex items-start gap-3">
                <div className="mt-1 group-hover:text-[#0088cc] transition-colors">
                  <Telegram />
                </div>
                <div className="space-y-1">
                  <a
                    href="https://t.me/username"
                    target="_blank"
                    className="text-sm  hover:text-[#0088cc] font-medium transition-colors hover-underline-animation"
                  >
                    @quartic_code
                  </a>
                  <p className="text-xs ">{t("columns.c1.items.i2.info")}</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Development Section */}
          <div className="col-span-1 space-y-6">
            <h3 className="text-sm font-semibold  uppercase tracking-wider">
              {t("columns.c2.title")}
            </h3>
            <ul className="space-y-4">
              <li className="group flex items-start gap-3">
                <div className="mt-1  group-hover:text-black dark:group-hover:text-white transition-colors">
                  <Github />
                </div>
                <div className="space-y-1">
                  <a
                    href="https://github.com/QuarticCode"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm  hover:text-black dark:hover:text-white font-medium transition-colors hover-underline-animation"
                  >
                    {t("columns.c2.items.i1.info")}
                  </a>
                </div>
              </li>

              <li className="group flex items-start gap-3">
                <div className="mt-1  group- transition-colors">
                  <Blog />
                </div>
                <div className="space-y-1">
                  <a
                    href="#"
                    className="text-sm   font-medium transition-colors hover-underline-animation"
                  >
                    {t("columns.c2.items.i2.info")}
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Legal Section */}
          <div className="col-span-1 space-y-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              {t("columns.c3.title")}
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm transition-colors">
                  {t("columns.c3.items.i1.info")}
                </a>
              </li>
              <li>
                <a href="#" className="text-sm transition-colors">
                  {t("columns.c3.items.i2.info")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm ">
            {/* &copy; 2026 QuarticCode. All rights reserved. */}
            {t("legal")}
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="  transition-colors" aria-label="Twitter">
              <Twitter />
            </a>
            <a href="#" className="  transition-colors" aria-label="LinkedIn">
              <LinkedIn />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
