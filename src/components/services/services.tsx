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
  },
  {
    icon: Cloud,
    title: "s2.title",
    description: "s2.description",
  },
  {
    icon: SmartphoneIcon,
    title: "s3.title",
    description: "s3.description",
  },
  {
    icon: LayoutDashboard,
    title: "s4.title",
    description: "s4.description",
  },
];

export default function Services() {
  return <Features featuresList={featuresList} />;
}
