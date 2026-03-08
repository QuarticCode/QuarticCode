"use client";

import React, { useState } from "react";
import {
  Globe,
  Smartphone,
  Palette,
  Building2,
  Check,
  MessageCircle,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { toast } from "sonner";

// Definición de tipos para los servicios
type ServiceType = {
  id: string;
  name: string;
  icon: React.ReactNode;
};

const servicesData: ServiceType[] = [
  {
    id: "web",
    name: "Desarrollo de Página Web",
    icon: <Globe className="h-5 w-5" />,
  },
  {
    id: "mobile",
    name: "Aplicación Móvil",
    icon: <Smartphone className="h-5 w-5" />,
  },
  {
    id: "design",
    name: "Diseño Gráfico",
    icon: <Palette className="h-5 w-5" />,
  },
  {
    id: "enterprise",
    name: "Aplicaciones Empresariales",
    icon: <Building2 className="h-5 w-5" />,
  },
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    info: "",
  });

  const [selectedServices, setSelectedServices] = useState<Set<string>>(
    new Set(),
  );

  const adminPhone: string = "+5355153703";

  // Manejador de cambios en inputs de texto
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Manejador de selección de servicios
  const toggleService = (id: string) => {
    const newSet = new Set(selectedServices);
    if (newSet.has(id)) {
      newSet.delete(id);
    } else {
      newSet.add(id);
    }
    setSelectedServices(newSet);
  };

  // Función para enviar a WhatsApp
  const handleSendToWhatsApp = () => {
    // Validaciones
    if (!formData.fullName.trim()) {
      toast.error("Error", {
        description: "Por favor, ingresa tu nombre completo.",
        className: "bg-slate-900",
      });
      return;
    }

    if (selectedServices.size === 0) {
      toast.error("Servicio requerido", {
        description: "Selecciona al menos un servicio de interés.",
        className: "bg-slate-900",
      });
      return;
    }

    // Construir lista de nombres de servicios seleccionados
    const servicesNames = servicesData
      .filter((s) => selectedServices.has(s.id))
      .map((s) => s.name)
      .join(" - ");

    // Construir el mensaje
    let message = `*Hola, me gustaría solicitar una cotización.*\n\n`;
    message += `👤 *Nombre:* ${formData.fullName}\n`;

    if (formData.email) {
      message += `📧 *Correo:* ${formData.email}\n`;
    }

    message += `🛠 *Servicios de Interés:*\n${servicesNames}\n\n`;

    if (formData.info) {
      message += `📝 *Información Adicional:*\n${formData.info}`;
    } else {
      message += `📝 *Información Adicional:* No especificada.`;
    }

    // Codificar URL
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${adminPhone}?text=${encodedMessage}`;

    // Abrir en nueva pestaña
    window.open(whatsappUrl, "_blank");

    toast.success("Redirigiendo...", {
      description: "Abriendo WhatsApp para enviar tu mensaje.",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-lg shadow-lg">
        <CardHeader className="text-center space-y-2">
          <CardTitle className="text-2xl font-bold text-slate-800 dark:text-slate-300">
            Solicitar Presupuesto
          </CardTitle>
          <CardDescription className="text-slate-500 dark:text-white">
            Selecciona los servicios que necesitas y te contactaremos vía
            WhatsApp.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Nombre Completo */}
          <div className="space-y-2">
            <Label htmlFor="fullName">
              Nombre Completo <span className="text-red-500">*</span>
            </Label>
            <Input
              id="fullName"
              name="fullName"
              placeholder="Ej. Juan Pérez"
              value={formData.fullName}
              onChange={handleChange}
              className="focus-visible:ring-green-500"
            />
          </div>

          {/* Correo Electrónico */}
          <div className="space-y-2">
            <Label htmlFor="email">
              Correo Electrónico{" "}
              <span className="text-slate-400 text-sm font-normal">
                (Opcional)
              </span>
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Ej. juan@ejemplo.com"
              value={formData.email}
              onChange={handleChange}
              className="focus-visible:ring-green-500"
            />
          </div>

          {/* Servicios Grid */}
          <div className="space-y-3">
            <Label>
              Servicios de Interés <span className="text-red-500">*</span>
            </Label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {servicesData.map((service) => {
                const isSelected = selectedServices.has(service.id);
                return (
                  <div
                    key={service.id}
                    onClick={() => toggleService(service.id)}
                    className={`
                      relative cursor-pointer rounded-lg border-2 p-4 transition-all duration-200 flex flex-col items-center justify-center gap-2 text-center
                      ${
                        isSelected
                          ? "border-green-600 bg-green-50 text-green-800 dark:bg-green-300"
                          : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-500 dark:text-slate-200 hover:border-green-300 text-slate-600 hover:bg-slate-50"
                      }
                    `}
                  >
                    {/* Icono de Check */}
                    {isSelected && (
                      <div className="absolute top-2 right-2 text-green-600">
                        <Check className="h-4 w-4" />
                      </div>
                    )}

                    {/* Icono del Servicio */}
                    {/* <div className={`p-2 rounded-full ${isSelected ? 'bg-white/50' : 'bg-slate-100'}`}>
                      {React.cloneElement(service.icon as React.ReactElement, {
                        className: `h-5 w-5 ${isSelected ? 'text-green-600' : 'text-slate-500'}`
                      })}
                    </div> */}

                    <span className="text-sm font-medium leading-tight">
                      {service.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Información Adicional */}
          <div className="space-y-2">
            <Label htmlFor="info">Información del Proyecto / Detalles</Label>
            <Textarea
              id="info"
              name="info"
              placeholder="Cuéntanos brevemente sobre tu proyecto..."
              value={formData.info}
              onChange={handleChange}
              className="min-h-25 focus-visible:ring-green-500 resize-none"
            />
          </div>

          {/* Botón de Enviar */}
          <Button
            onClick={handleSendToWhatsApp}
            className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold h-12 text-lg"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Enviar por WhatsApp
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
