"use client";

import React, { useState } from "react";
import { MessageCircle } from "lucide-react";
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

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    info: "",
  });

  const adminPhone: string = "+5355153703";

  // Manejador de cambios en inputs de texto
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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

    // Construir el mensaje
    let message = `*Hola, me gustaría solicitar una cotización.*\n\n`;
    message += `👤 *Nombre:* ${formData.fullName}\n`;

    if (formData.email) {
      message += `📧 *Correo:* ${formData.email}\n`;
    }

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
    <div className="h-120 flex items-center justify-center p-4">
      <Card className="w-full max-w-lg shadow-lg">
        <CardHeader className="text-center space-y-2">
          <CardTitle className="md:text-2xl text-xl font-bold text-slate-800 dark:text-slate-300">
            Solicitar Presupuesto
          </CardTitle>
          <CardDescription className="text-md text-slate-500 dark:text-white">
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

          {/* Información Adicional */}
          <div className="space-y-2">
            <Label htmlFor="info">Información del Proyecto / Detalles</Label>
            <Textarea
              id="info"
              name="info"
              placeholder="Cuéntanos brevemente sobre tu proyecto..."
              value={formData.info}
              onChange={handleChange}
              className="md:min-h-25 min-h-16 focus-visible:ring-green-500 resize-none"
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
