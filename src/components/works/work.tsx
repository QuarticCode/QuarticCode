import Link from "next/link";
import { Button } from "../ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

type Props = {
  title: string;
  info: string;
  link: string;
};

export default function Work({ title, info, link }: Props) {
  return (
    <Card className="flex flex-col gap-4 w-140 border-2 border-slate-800 bg-linear-to-br from-blue-500/20 via-blue-500/50 to-indigo-500/40">
      <CardHeader>
        <CardTitle className="text-4xl">{title}</CardTitle>
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
