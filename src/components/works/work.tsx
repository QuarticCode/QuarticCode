import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { ArrowUpRight } from "lucide-react";

type Props = {
  title: string;
  info: string;
  link: string;
  img: string;
};

export default function Work({ title, info, link, img }: Props) {
  return (
    <Card className="group overflow-hidden border border-border bg-background/60 backdrop-blur transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      {/* Imagen preview */}
      <div className="relative w-full h-48 overflow-hidden">
        <Image
          src={img}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Overlay sutil */}
        <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent opacity-60" />
      </div>

      <CardHeader>
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>

        <CardDescription className="text-sm line-clamp-3">
          {info}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex justify-between items-center">
        <Link href={link} target="_blank">
          <Button className="flex items-center gap-2">
            Ver trabajo
            <ArrowUpRight size={16} />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
