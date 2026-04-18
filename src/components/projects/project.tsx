import Link from "next/link";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { TProject } from "@/src/lib/types/project";
import { ArrowUpRight } from "lucide-react";

export default function Project({ title, info, link }: TProject) {
  return (
    <Card className="group relative overflow-hidden border border-border bg-background/60 backdrop-blur transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      {/* Gradient overlay sutil */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-500/10 via-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      <CardHeader>
        <CardTitle className="text-xl font-semibold">{title}</CardTitle>
        <CardDescription className="text-sm line-clamp-3">
          {info}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex justify-between items-center">
        <Link href={link}>
          <Button className="flex items-center gap-2">
            Ver proyecto
            <ArrowUpRight size={16} />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
