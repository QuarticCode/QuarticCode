import {
  SmartphoneIcon,
  Cloud,
  CodeSquareIcon,
  LayoutDashboard,
} from "lucide-react";
import Features from "@/src/components/shadcn-studio/blocks/features-section-01/features-section-01";

const featuresList = [
  {
    icon: CodeSquareIcon,
    title: "s1.title",
    description: "s1.description",
    cardBorderColor:
      "border-green-600/40 hover:border-green-600 dark:border-green-400/40 dark:hover:border-green-400",
    avatarTextColor: "text-green-600 dark:text-green-400",
    avatarBgColor: "bg-green-600/10 dark:bg-green-400/10",
  },
  {
    icon: Cloud,
    title: "s2.title",
    description: "s2.description",
    cardBorderColor:
      "border-amber-600/40 hover:border-amber-600 dark:border-amber-400/40 dark:hover:border-amber-400",
    avatarTextColor: "text-amber-600 dark:text-amber-400",
    avatarBgColor: "bg-amber-600/10 dark:bg-amber-400/10",
  },
  {
    icon: SmartphoneIcon,
    title: "s3.title",
    description: "s3.description",
    cardBorderColor: "border-destructive/40 hover:border-destructive",
    avatarTextColor: "text-destructive",
    avatarBgColor: "bg-destructive/10",
  },
  {
    icon: LayoutDashboard,
    title: "s4.title",
    description: "s4.description",
    cardBorderColor:
      "border-sky-600/40 hover:border-sky-600 dark:border-sky-400/40 dark:hover:border-sky-400",
    avatarTextColor: "text-sky-600 dark:text-sky-400",
    avatarBgColor: "bg-sky-600/10 dark:bg-sky-400/10",
  },
];

export default function Services() {
  return <Features featuresList={featuresList} />;
}
