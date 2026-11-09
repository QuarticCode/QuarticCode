import type { ComponentType } from "react";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { Link } from "@/src/i18n/navigation";
import { cn } from "@/src/lib/utils";

type IconType = ComponentType<{ className?: string }>;

type Item = {
  icon: IconType;
  title: string;
  description: string;
};

type UseCase = {
  title: string;
  description: string;
};

function SectionHeading({
  index,
  title,
}: {
  index: string;
  title: string;
}) {
  return (
    <div className="max-w-2xl">
      <div className="flex items-center gap-3">
        <span className="font-mono text-xs text-brand">{index}</span>
        <span className="h-px w-8 bg-border" />
      </div>
      <h2 className="mt-4 text-balance text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}

export function ServiceDetailHero({
  backLabel,
  badge,
  title,
  highlight,
  description,
  primaryLabel,
  primaryHref = "/contact",
  secondaryLabel,
  secondaryHref = "/projects",
}: {
  backLabel: string;
  badge: string;
  title: string;
  highlight?: string;
  description: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="pt-28 pb-14 md:pt-36">
      <div className="container-page">
        <Link
          href="/services"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="size-4" />
          {backLabel}
        </Link>

        <div className="mt-8 max-w-3xl">
          <span className="eyebrow">{badge}</span>
          <h1 className="mt-5 text-balance text-[clamp(2.6rem,6vw,4.5rem)] font-semibold tracking-[-0.045em]">
            {title}{" "}
            {highlight && <span className="text-brand">{highlight}</span>}
          </h1>
          <p className="mt-6 max-w-[62ch] text-pretty text-lg leading-relaxed text-muted-foreground">
            {description}
          </p>

          {(primaryLabel || secondaryLabel) && (
            <div className="mt-8 flex flex-wrap gap-3">
              {primaryLabel && (
                <Button
                  asChild
                  size="lg"
                  className="group h-12 rounded-full bg-brand px-7 text-base font-semibold text-brand-foreground hover:bg-brand/90"
                >
                  <Link href={primaryHref}>
                    {primaryLabel}
                    <ArrowUpRight className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                </Button>
              )}

              {secondaryLabel && (
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-12 rounded-full border-border px-7 text-base font-semibold"
                >
                  <Link href={secondaryHref}>{secondaryLabel}</Link>
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export function ServiceItemsSection({
  index,
  title,
  items,
  columns = 3,
}: {
  index: string;
  title: string;
  items: Item[];
  columns?: 2 | 3 | 4;
}) {
  const gridClass =
    columns === 2
      ? "sm:grid-cols-2"
      : columns === 4
        ? "sm:grid-cols-2 lg:grid-cols-4"
        : "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <section className="border-t border-border">
      <div className="container-page py-16 sm:py-20">
        <SectionHeading index={index} title={title} />

        <div className={cn("mt-10 grid gap-4", gridClass)}>
          {items.map((item, itemIndex) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-6 transition-[border-color,box-shadow] duration-300 hover:border-brand/40 hover:shadow-lg hover:shadow-brand/5"
              >
                <div className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-brand/10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative flex items-start justify-between gap-4">
                  <span className="flex size-10 items-center justify-center rounded-xl border border-border bg-surface-2 text-brand">
                    <Icon className="size-5" />
                  </span>
                  <span className="font-mono text-xs text-muted-foreground/50">
                    {String(itemIndex + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="relative mt-5 text-base font-semibold tracking-tight">
                  {item.title}
                </h3>
                <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function ServiceBenefitsSection({
  index,
  title,
  items,
}: {
  index: string;
  title: string;
  items: string[];
}) {
  return (
    <section className="border-y border-border bg-surface-2/40">
      <div className="container-page py-16 sm:py-20">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <SectionHeading index={index} title={title} />

          <ul className="grid gap-3 sm:grid-cols-2">
            {items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl border border-border bg-background px-4 py-3.5 text-sm"
              >
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function ServiceUseCasesSection({
  index,
  title,
  items,
}: {
  index: string;
  title: string;
  items: UseCase[];
}) {
  return (
    <section className="border-t border-border">
      <div className="container-page py-16 sm:py-20">
        <SectionHeading index={index} title={title} />

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {items.map((item, itemIndex) => (
            <article
              key={item.title}
              className="rounded-2xl border border-border bg-surface p-6"
            >
              <span className="font-mono text-xs text-muted-foreground/50">
                {String(itemIndex + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-lg font-semibold tracking-tight">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServiceProcessSection({
  index,
  title,
  steps,
}: {
  index: string;
  title: string;
  steps: string[];
}) {
  return (
    <section className="border-y border-border bg-surface-2/40">
      <div className="container-page py-16 sm:py-20">
        <SectionHeading index={index} title={title} />

        <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, stepIndex) => (
            <li
              key={step}
              className="relative rounded-2xl border border-border bg-background p-5"
            >
              <span className="font-mono text-xs text-brand">
                {String(stepIndex + 1).padStart(2, "0")}
              </span>
              <p className="mt-3 text-sm font-medium">{step}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function ServiceCallout({
  icon: Icon,
  title,
  description,
}: {
  icon: IconType;
  title: string;
  description: string;
}) {
  return (
    <section className="border-t border-border">
      <div className="container-page py-16 sm:py-20">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-surface p-8 sm:p-12">
          <div className="absolute -right-20 -top-20 size-64 rounded-full bg-brand/10 blur-3xl" />

          <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center">
            <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl border border-border bg-surface-2 text-brand">
              <Icon className="size-6" />
            </span>

            <div>
              <h2 className="text-balance text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">
                {title}
              </h2>
              <p className="mt-2 max-w-[62ch] text-pretty leading-relaxed text-muted-foreground">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServiceCta({
  title,
  description,
  buttonLabel,
  href = "/contact",
}: {
  title: string;
  description: string;
  buttonLabel: string;
  href?: string;
}) {
  return (
    <section className="pb-24">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-surface p-8 sm:p-12">
          <div className="absolute -bottom-20 -right-20 size-72 rounded-full bg-brand/10 blur-3xl" />

          <div className="relative grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="text-balance text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                {title}
              </h2>
              <p className="mt-3 max-w-[60ch] text-pretty leading-relaxed text-muted-foreground">
                {description}
              </p>
            </div>

            <Button
              asChild
              size="lg"
              className="group h-12 rounded-full bg-brand px-7 text-base font-semibold text-brand-foreground hover:bg-brand/90"
            >
              <Link href={href}>
                {buttonLabel}
                <ArrowUpRight className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
