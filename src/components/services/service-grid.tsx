// src/components/services/services-grid.tsx
"use client";

import { useState } from "react";
import { ServiceCard } from "./service-card";
import { ServiceModal } from "./service-modal";
import { Service } from "@/src/types/service";
import { servicesData } from "@/src/lib/data/services";
import { useTranslations } from "next-intl";

export function ServicesGrid() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const t = useTranslations("Services.page");

  const handleOpenDetails = (service: Service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedService(null), 300); // Limpia el dato después de cerrar
  };

  return (
    <section className="py-20 bg-background" id="servicios">
      <div className="container mx-auto px-4">
        {/* Header de la sección */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            {t("badge")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            {t("title")}
          </h2>
          <p className="text-muted-foreground text-lg">{t("description")}</p>
        </div>

        {/* Grid de Tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              onOpenDetails={handleOpenDetails}
            />
          ))}
        </div>

        {/* Modal */}
        <ServiceModal
          service={selectedService}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      </div>
    </section>
  );
}
