// src/lib/data.ts
import { Service } from "@/src/types/service";
import { Monitor, Cloud, Smartphone, PenTool } from "lucide-react";

export const servicesData: Service[] = [
  {
    id: "web",
    title: "cards.1.title",
    description: "cards.1.description",
    icon: Monitor,
    tags: [
      "Páginas Personales",
      "Blogs",
      "Tiendas Virtuales",
      "Landings",
      "Institucionales",
    ],
    detailedDescription:
      "Ofrecemos soluciones completas de desarrollo web adaptadas a tus necesidades. Utilizamos las últimas tecnologías para garantizar rendimiento y SEO.",
    features: [
      "Sitios web corporativos de alta conversión.",
      "E-commerce integrado con pasarelas de pago.",
      "Landing pages optimizadas para campañas.",
      "Blogs dinámicos y fáciles de gestionar.",
    ],
  },
  {
    id: "cloud",
    title: "cards.2.title",
    description: "cards.2.description",
    icon: Cloud,
    tags: ["APIs", "Base de Datos", "Monitoreo", "Intranet Local"],
    detailedDescription:
      "Gestiona tu información con seguridad. Diseñamos arquitecturas cloud o servidores locales (Intranet) para total independencia.",
    features: [
      "Desarrollo de APIs RESTful y GraphQL.",
      "Bases de datos SQL y NoSQL.",
      "Sistemas de monitoreo en tiempo real.",
      "Soluciones Intranet sin dependencia de internet.",
    ],
  },
  {
    id: "mobile",
    title: "cards.3.title",
    description: "cards.3.description",
    icon: Smartphone,
    tags: ["Android", "iOS", "Empresas", "Tiendas"],
    detailedDescription:
      "Desarrollamos aplicaciones nativas e híbridas con una experiencia de usuario fluida en cualquier dispositivo móvil.",
    features: [
      "Aplicaciones nativas de alto rendimiento.",
      "Publicación en Google Play y App Store.",
      "Integración con sistemas web existentes.",
      "Diseño adaptativo a diferentes pantallas.",
    ],
  },
  {
    id: "design",
    title: "cards.4.title",
    description: "cards.4.description",
    icon: PenTool,
    tags: ["Banners", "Logos", "Mock-ups", "UI/UX"],
    detailedDescription:
      "El diseño es clave para el éxito. Creamos identidades visuales fuertes e interfaces intuitivas para usuarios.",
    features: [
      "Diseño de Logotipos e Identidad Corporativa.",
      "Banners publicitarios de alta conversión.",
      "Mock-ups realistas para presentaciones.",
      "Diseño de interfaz de usuario (UI) y experiencia (UX).",
    ],
  },
];
