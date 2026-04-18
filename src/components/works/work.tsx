import Link from "next/link";
import { Button } from "../ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Image from "next/image";

type Props = {
  title: string;
  info: string;
  link: string;
  img: string;
};

export default function Work({ title, info, link, img }: Props) {
  return (
    <Card className="flex flex-col gap-4 md:w-140 w-96 border-2 border-slate-800 relative overflow-hidden z-1">
      <Image
        src={img}
        width={80}
        height={80}
        alt={title}
        className="absolute w-full h-64 blur-3xl -z-1"
      />
      <CardHeader>
        <CardTitle className="flex flex-row justify-evenly items-center">
          <Image src={img} width={80} height={80} alt={title} />
          <h1 className="text-4xl">{title}</h1>
        </CardTitle>
        <CardDescription className="text-lg">{info}</CardDescription>
        <CardFooter>
          <Link href={link}>
            <Button variant={"link"} className="w-16">
              Visitar
            </Button>
          </Link>
        </CardFooter>
      </CardHeader>
    </Card>
  );
}
