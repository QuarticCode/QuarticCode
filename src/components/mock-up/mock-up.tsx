import { useTranslations } from "next-intl";

export function MockUp() {
  const t = useTranslations("MockUp");

  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-brand-soft via-transparent to-transparent" />
      <div className="bg-grid absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,black_25%,transparent_70%)]" />

      <div className="container-page py-24 text-center sm:py-32">
        <p className="eyebrow">QuarticCode</p>

        <h2 className="mt-6 text-balance text-[clamp(2.75rem,9vw,7rem)] font-semibold leading-[0.92] tracking-[-0.05em]">
          {t("b1")}
          <br />
          <span className="text-brand">{t("b2")}</span>
        </h2>
      </div>
    </section>
  );
}
