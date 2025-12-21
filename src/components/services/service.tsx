import { Service as ServiceType } from "@/src/lib/types/service";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export function Service({ service }: { service: ServiceType }) {
  const t = useTranslations("Services");

  return (
    <article
      className={`flex flex-col border-2 border-solid ${service.color} justify-between sm:w-85 w-85 md:m-4 m-0 dark:bg-slate-800 bg-zinc-100 dark:text-white text-black p-4 rounded-xl hover:scale-105 hover:shadow transition-all ease-in-out duration-200 `}
    >
      <div className="flex flex-row justify-center items-center mb-8 w-75">
        <Image
          src={service.icon}
          alt="Icon Services"
          width={40}
          height={40}
          className="dark:invert-0 invert w-20 m-8"
        />
        <h1 className="font-bold text-[20px]">{t(`${service.title}`)}</h1>
      </div>
      <p className="text-[18px]">{t(`${service.description}`)}</p>
      <Link
        href="/en/Programacion"
        className="text-[20px] z-30 m-4 p-2 ease-in-out hover:underline transition-all flex rounded-xl"
      >
        Show more →
      </Link>
    </article>
  );
}
