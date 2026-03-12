// src/types/services.ts
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType; // Para componentes de Lucide
  tags: string[];
  detailedDescription: string;
  features: string[];
}
