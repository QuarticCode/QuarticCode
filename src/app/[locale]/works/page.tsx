import { Works } from "@/src/components/works/works";

export const metadata = {
  title: "Servicios",
  description: "Trabajos de desarrollo web | QuarticCode",
};

export default function WorksPage() {
  return (
    <div className="flex flex-col md:mt-32 mt-24 items-center justify-center font-sans md:mr-8 md:ml-8">
      <Works />
    </div>
  );
}
