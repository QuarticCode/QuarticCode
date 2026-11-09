import { CtaSection } from "@/src/components/contact/cta-section";
import { ServicesGrid } from "@/src/components/services/service-grid";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "ServicesPage" });

  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
  };
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <ServicesGrid />

      <CtaSection />
    </main>
  );
}
