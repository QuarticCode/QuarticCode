import Image from "next/image";
import {
  Blog,
  Twitter,
  LinkedIn,
  Envelop,
  Github,
  Telegram,
} from "@/src/components/icons";
import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="border-t border-border bg-surface-2/40">
      <div className="container-page py-14 lg:py-18">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div className="space-y-4">
            <a href="#" className="flex items-center gap-2.5">
              <Image
                src="/logo.svg"
                width={36}
                height={28}
                className="h-7 w-auto"
                alt="QuarticCode"
              />
              <span className="text-base font-semibold tracking-tight">
                QuarticCode
              </span>
            </a>
            <p className="max-w-[34ch] text-sm leading-relaxed text-muted-foreground">
              {t("info")}
            </p>
          </div>

          <div className="space-y-5">
            <h3 className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-muted-foreground">
              {t("columns.c1.title")}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 text-muted-foreground [&>svg]:size-4">
                  <Envelop />
                </span>
                <div className="space-y-0.5">
                  <a
                    href="mailto:quarticcode@gmail.com"
                    target="_blank"
                    className="text-sm font-medium text-foreground hover:text-brand"
                  >
                    quarticcode@gmail.com
                  </a>
                  <p className="text-xs text-muted-foreground">
                    {t("columns.c1.items.i1.info")}
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-0.5 text-muted-foreground [&>svg]:size-4">
                  <Telegram />
                </span>
                <div className="space-y-0.5">
                  <a
                    href="https://t.me/username"
                    target="_blank"
                    className="text-sm font-medium text-foreground hover:text-brand"
                  >
                    @quartic_code
                  </a>
                  <p className="text-xs text-muted-foreground">
                    {t("columns.c1.items.i2.info")}
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="space-y-5">
            <h3 className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-muted-foreground">
              {t("columns.c2.title")}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 text-muted-foreground [&>svg]:size-4">
                  <Github />
                </span>
                <a
                  href="https://github.com/QuarticCode"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-foreground hover:text-brand"
                >
                  {t("columns.c2.items.i1.info")}
                </a>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-0.5 text-muted-foreground [&>svg]:size-4">
                  <Blog />
                </span>
                <a
                  href="#"
                  className="text-sm font-medium text-foreground hover:text-brand"
                >
                  {t("columns.c2.items.i2.info")}
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-5">
            <h3 className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-muted-foreground">
              {t("columns.c3.title")}
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  {t("columns.c3.items.i1.info")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  {t("columns.c3.items.i2.info")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">{t("legal")}</p>
          <div className="flex items-center gap-5">
            <a
              href="#"
              aria-label="Twitter"
              className="text-muted-foreground hover:text-foreground"
            >
              <Twitter />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-muted-foreground hover:text-foreground"
            >
              <LinkedIn />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
