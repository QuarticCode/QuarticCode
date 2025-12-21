import { UiProject } from "@/src/lib/types/project";
import {
  BorderGlide,
  BorderGlideCard,
  BorderGlideContent,
  BorderGlideDescription,
  BorderGlideHeader,
  BorderGlideTitle,
} from "../ui/border-glide";

export function Project({ uiProject }: { uiProject: UiProject }) {
  const { project, style } = uiProject;

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
            <BorderGlideTitle>{project.title}</BorderGlideTitle>
            <BorderGlideDescription>
              {project.description}
            </BorderGlideDescription>
          </BorderGlideHeader>
        </BorderGlideContent>
      </BorderGlideCard>
    </BorderGlide>
  );
}
