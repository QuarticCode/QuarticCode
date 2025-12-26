import { Service as ServiceType } from "@/src/lib/types/service";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";

export function Service({ service }: { service: ServiceType }) {
  const t = useTranslations("Services");

  return (
    <Card
      className={`flex flex-col border-2 border-solid ${service.color} justify-between min-h-96 max-h-96 w-85 md:m-4 m-0 dark:text-white text-black p-4 rounded-xl hover:scale-105 hover:shadow transition-all ease-in-out duration-200 `}
    >
      <CardHeader>
        <Image
          src={service.icon}
          alt="Icon Services"
          width={40}
          height={40}
          className="dark:invert-0 invert m-8"
        />
        <CardTitle>{t(`${service.title}`)}</CardTitle>
        <CardDescription>{t(`${service.description}`)}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button variant={"outline"}>
          <Link
            href="/en/Programacion"
            className="text-[20px] z-30 m-4 p-2 flex rounded-xl"
          >
            {t("showMore")}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
