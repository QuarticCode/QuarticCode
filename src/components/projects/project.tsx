import { UiProject } from "@/src/lib/types/project";
import {
  BorderGlide,
  BorderGlideCard,
  BorderGlideContent,
  BorderGlideDescription,
  BorderGlideHeader,
  BorderGlideTitle,
} from "../ui/border-glide";
import { useTranslations } from "next-intl";

export function Project({ uiProject }: { uiProject: UiProject }) {
  const { project, style } = uiProject;
  const t = useTranslations("Projects");

  return (
    <BorderGlide
      autoPlayInterval={6000}
      borderDuration={5000}
      borderColor="radial-gradient(ellipse, #fff, transparent)"
      className={`h-40 w-40 rounded-xl ${style} hover:scale-105 ease-in-out transition-all duration-200`}
    >
      <BorderGlideCard>
        <BorderGlideContent>
          <BorderGlideHeader>
            <BorderGlideTitle>{t(project.title)}</BorderGlideTitle>
            <BorderGlideDescription>
              {t(project.description)}
            </BorderGlideDescription>
          </BorderGlideHeader>
        </BorderGlideContent>
      </BorderGlideCard>
    </BorderGlide>
  );
}
