import type { ComponentType } from "react";

import { ArrowRightIcon } from "lucide-react";

import { Avatar, AvatarFallback } from "@/src/components/ui/avatar";
import { Button } from "@/src/components/ui/button";
import { Card, CardContent } from "@/src/components/ui/card";

import { cn } from "@/src/lib/utils";
import { useTranslations } from "next-intl";
import { Link } from "@/src/i18n/navigation";

type Features = {
  icon: ComponentType;
  title: string;
  description: string;
  cardBorderColor: string;
  avatarTextColor: string;
  avatarBgColor: string;
}[];

const Features = ({ featuresList }: { featuresList: Features }) => {
  const t = useTranslations("Services");

  return (
    <section
      className="py-8 sm:py-16 lg:py-24"
      data-aos={"fade-up"}
      data-aos-delay={"10"}
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 space-y-4 sm:mb-16 lg:mb-24">
          <h2 className="text-2xl font-semibold md:text-3xl lg:text-4xl">
            {t("title")}
          </h2>
          <p className="text-muted-foreground text-xl">
            Explora nuestros servicios y podras Explore key features designed to
            enhance your shopping experience with intuitive navigation, robust
            security, and seamless functionality.
          </p>
          <Button
            variant="outline"
            className="rounded-lg text-base shadow-none has-[>svg]:px-6"
            size="lg"
            asChild
          >
            <Link href="/services">
              See all services
              <ArrowRightIcon />
            </Link>
          </Button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuresList.map((features, index) => (
            <Card
              key={index}
              className={cn(
                "shadow-none transition-colors duration-300",
                features.cardBorderColor,
              )}
            >
              <CardContent>
                <Avatar className="mb-6 size-10 rounded-md">
                  <AvatarFallback
                    className={cn(
                      "rounded-md [&>svg]:size-6",
                      features.avatarBgColor,
                      features.avatarTextColor,
                    )}
                  >
                    <features.icon />
                  </AvatarFallback>
                </Avatar>
                <h6 className="mb-2 text-lg font-semibold">
                  {t(features.title)}
                </h6>
                <p className="text-muted-foreground">
                  {t(features.description)}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
