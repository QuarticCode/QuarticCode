import { Works } from "@/src/components/works/works";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "WorksPage" });

  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
  };
}

export default function WorksPage() {
  return (
    <div className="flex flex-col md:mt-32 mt-24 items-center justify-center font-sans md:mr-8 md:ml-8">
      <Works />
    </div>
  );
}
