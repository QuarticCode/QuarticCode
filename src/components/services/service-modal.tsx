// src/components/services/service-modal.tsx

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { CheckCircle2 } from "lucide-react";
import { Service } from "@/src/types/service";

interface ServiceModalProps {
  service: Service | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ServiceModal({ service, isOpen, onClose }: ServiceModalProps) {
  if (!service) return null;
  const Icon = service.icon;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-150">
        <DialogHeader>
          <div className="flex flex-col items-center text-center mb-4">
            <div className="p-3 bg-primary/10 rounded-full mb-3 text-primary">
              <Icon size={40} />
            </div>
            <DialogTitle className="text-2xl">{service.title}</DialogTitle>
          </div>
          <DialogDescription className="text-base text-center">
            {service.detailedDescription}
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4">
          <h4 className="font-semibold text-lg mb-3">Lo que incluimos:</h4>
          <ul className="space-y-3">
            {service.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle2
                  className="text-green-500 mt-1 shrink-0"
                  size={18}
                />
                <span className="text-sm text-muted-foreground">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 flex justify-end">
          <Button onClick={onClose}>Cerrar</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
