// components/AOSWrapper.tsx
"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface AOSWrapperProps {
  children: React.ReactNode;
}

export default function AOSWrapper({ children }: AOSWrapperProps) {
  useEffect(() => {
    // Inicializar AOS
    AOS.init({
      // Global settings
      duration: 800,
      once: false,
      offset: 120,
      delay: 0,
      easing: "ease-in-out",
      mirror: false, // si quieres que se repita al hacer scroll hacia arriba
      anchorPlacement: "top-bottom",
    });

    // Limpiar AOS al desmontar
    return () => {
      AOS.refreshHard();
    };
  }, []);

  return <>{children}</>;
}
