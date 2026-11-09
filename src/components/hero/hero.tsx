import { useTranslations } from "next-intl";
import { MorphoTextFlip } from "../ui/morphotextflip";
import { Button } from "../ui/button";
import { Link } from "@/src/i18n/navigation";
import { ContactDialog } from "../contact/contact-dialog";
import { ArrowUpRight } from "lucide-react";

const stack = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind",
  "Node",
  "Postgres",
];

export function Hero() {
  const t = useTranslations("Home.Hero");

  return (
    <section className="relative isolate overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="bg-grid absolute inset-0 -z-20 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
      <div className="absolute -top-40 right-[-10%] -z-10 h-[34rem] w-[34rem] rounded-full bg-brand/15 blur-[120px]" />
      <div className="absolute bottom-[-12rem] left-[-8%] -z-10 h-[28rem] w-[28rem] rounded-full bg-highlight/10 blur-[120px]" />

      <div className="container-page grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1.5 backdrop-blur">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-brand" />
            </span>
            <span className="eyebrow text-foreground">{t("badge")}</span>
          </span>

          <h1 className="mt-6 text-balance text-[clamp(2.6rem,6vw,4.75rem)] font-semibold tracking-[-0.045em]">
            {t("title")}
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-[clamp(1.5rem,3.2vw,2.5rem)] font-medium tracking-[-0.03em]">
            <span className="text-muted-foreground">{t("morphoText.title")}</span>
            <MorphoTextFlip
              words={[
                t("morphoText.words.w1"),
                t("morphoText.words.w2"),
                t("morphoText.words.w3"),
              ]}
              className="rounded-none border-0 bg-transparent px-0 pt-0 pb-0 shadow-none"
              textClassName="text-[clamp(1.5rem,3.2vw,2.5rem)] font-semibold tracking-[-0.03em] text-brand"
            />
          </div>

          <p className="mt-6 max-w-[58ch] text-pretty text-lg leading-relaxed text-muted-foreground">
            {t("subtitle")}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <ContactDialog>
              <Button
                size="lg"
                className="group h-12 rounded-full bg-brand px-7 text-base font-semibold text-brand-foreground shadow-sm hover:bg-brand/90"
              >
                {t("cta_primary")}
                <ArrowUpRight className="ml-1 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Button>
            </ContactDialog>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 rounded-full border-border px-7 text-base font-semibold"
            >
              <Link href="/works">{t("cta_secondary")}</Link>
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-brand/20 via-transparent to-highlight/10 blur-2xl" />

          <div className="overflow-hidden rounded-3xl border border-border bg-surface/80 shadow-2xl shadow-black/5 backdrop-blur">
            <div className="flex items-center gap-2 border-b border-border/70 px-4 py-3">
              <span className="size-2.5 rounded-full bg-red-400/80" />
              <span className="size-2.5 rounded-full bg-amber-400/80" />
              <span className="size-2.5 rounded-full bg-emerald-400/80" />
              <span className="ml-2 font-mono text-[0.7rem] tracking-tight text-muted-foreground">
                quartic@studio:~/build
              </span>
            </div>

            <div className="space-y-2.5 p-5 font-mono text-[0.78rem] leading-relaxed">
              <p>
                <span className="text-brand">$</span> pnpm build
              </p>
              <p className="text-muted-foreground">▲ Next.js 16 · Turbopack</p>
              <p>
                <span className="text-emerald-500">✓</span> Compiled successfully
              </p>
              <p>
                <span className="text-emerald-500">✓</span> Linting and checking
                validity
              </p>
              <p>
                <span className="text-emerald-500">✓</span> Generating static
                pages
              </p>
              <div className="mt-3 flex justify-between border-t border-border/60 pt-3 text-muted-foreground">
                <span>Route (app)</span>
                <span>Size</span>
              </div>
              <div className="flex justify-between">
                <span className="text-foreground">/</span>
                <span className="text-muted-foreground">1.2 kB</span>
              </div>
              <div className="flex justify-between">
                <span className="text-foreground">/works</span>
                <span className="text-muted-foreground">2.4 kB</span>
              </div>
              <div className="flex justify-between">
                <span className="text-foreground">/services</span>
                <span className="text-muted-foreground">1.8 kB</span>
              </div>
              <p className="pt-2">
                <span className="text-brand">✓</span> Ready in 1.4s
              </p>
            </div>

            <div className="border-t border-border/70 bg-surface-2/60 px-4 py-3">
              <div className="flex flex-wrap gap-1.5">
                {stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border/70 bg-background/60 px-2.5 py-1 font-mono text-[0.65rem] uppercase tracking-[0.12em] text-muted-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-border bg-surface px-4 py-3 shadow-lg sm:block">
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-muted-foreground">
              Performance
            </p>
            <p className="text-2xl font-semibold tabular-nums">
              100{" "}
              <span className="text-xs font-normal text-muted-foreground">
                Lighthouse
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
