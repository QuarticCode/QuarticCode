// src/components/services/service-card.tsx
// "use client"; // Necesario porque usa useState (para el modal) y Framer Motion

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Service } from "@/src/types/service";
import { Badge } from "lucide-react";
import { Button } from "../ui/button";

interface ServiceCardProps {
  service: Service;
  index: number; // Para el delay escalonado
  onOpenDetails: (service: Service) => void;
}

export function ServiceCard({
  service,
  index,
  onOpenDetails,
}: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }} // Delay escalonado
    >
      <Card className="h-full flex flex-col transition-all hover:shadow-lg hover:-translate-y-1">
        <CardHeader>
          <div className="mb-2 text-primary">
            <Icon size={32} />
          </div>
          <CardTitle className="text-xl">{service.title}</CardTitle>
          <CardDescription>{service.description}</CardDescription>
        </CardHeader>
        <CardContent className="grow">
          <div className="flex flex-wrap gap-2">
            {service.tags.map((tag) => (
              <Badge key={tag} className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Button
            variant="ghost"
            className="w-full justify-between group"
            onClick={() => onOpenDetails(service)}
          >
            Ver detalles
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
