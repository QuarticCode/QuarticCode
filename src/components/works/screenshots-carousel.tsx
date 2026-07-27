"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const screenshots = [
  {
    title: "Administrador",
    description: "Control de usuarios y permisos.",
    image: "/works/screenshots/pan-y-chocolate/admin.png",
  },
  {
    title: "Agregos",
    description: "Selector de agregos para ciertos productos.",
    image: "/works/screenshots/pan-y-chocolate/agregos.png",
  },
  {
    title: "Exportación",
    description: "Exporta información fácilmente.",
    image: "/works/screenshots/pan-y-chocolate/export.png",
  },
  {
    title: "Productos",
    description: "Gestión completa del catálogo.",
    image: "/works/screenshots/pan-y-chocolate/productos.png",
  },
  {
    title: "Selector",
    description: "Selección intuitiva de opciones.",
    image: "/works/screenshots/pan-y-chocolate/selector.png",
  },
  {
    title: "Ticket",
    description: "Previsualizacion y impresión del comprobante.",
    image: "/works/screenshots/pan-y-chocolate/ticket.png",
  },
];

export default function ScreenshotsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
  });

  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());

    onSelect();

    emblaApi.on("select", onSelect);

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <section className="relative overflow-hidden py-24">

      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-125 w-125 -translate-x-1/2 rounded-full bg-primary/10 blur-[180px]" />
      </div>

      <div className="mx-auto max-w-7xl">

        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold">
            Galería
          </h2>

          <p className="mt-3 text-muted-foreground text-lg">
            Algunas pantallas principales de la aplicación.
          </p>
        </div>

        <div className="relative">

          <button
            onClick={() => emblaApi?.scrollPrev()}
            className="absolute left-0 top-1/2 z-20 -translate-y-1/2 rounded-full border bg-background/80 p-3 backdrop-blur transition hover:scale-110"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            onClick={() => emblaApi?.scrollNext()}
            className="absolute right-0 top-1/2 z-20 -translate-y-1/2 rounded-full border bg-background/80 p-3 backdrop-blur transition hover:scale-110"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div
            ref={emblaRef}
            className="overflow-hidden"
          >
            <div className="flex">

              {screenshots.map((item, index) => (

                <div
                  key={index}
                  className="
                  min-w-0
                  flex-[0_0_100%]
                  md:flex-[0_0_50%]
                  xl:flex-[0_0_33.333%]
                  px-6
                "
                >
                  <div
                    className={`
                    transition-all duration-500
                    ${
                      selected === index
                        ? "scale-100 opacity-100"
                        : "scale-90 opacity-60"
                    }
                  `}
                  >
                    <div className="mx-auto w-67.5">

                      <div
                        className="
                        rounded-[42px]
                        border
                        bg-zinc-950
                        p-3
                        shadow-2xl
                      "
                      >
                        <div className="mx-auto mb-3 h-5 w-24 rounded-full bg-zinc-800" />

                        <Image
                          src={item.image}
                          alt={item.title}
                          width={400}
                          height={800}
                          className="
                          rounded-[30px]
                          transition-transform
                          duration-500
                          hover:scale-[1.02]
                        "
                        />
                      </div>

                      <div className="mt-6 text-center">

                        <h3 className="text-xl font-semibold">
                          {item.title}
                        </h3>

                        <p className="mt-2 text-sm text-muted-foreground">
                          {item.description}
                        </p>

                      </div>
                    </div>
                  </div>
                </div>

              ))}
            </div>
          </div>

          <div className="mt-10 flex justify-center gap-3">

            {screenshots.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                className={`h-2 rounded-full transition-all ${
                  selected === index
                    ? "w-8 bg-primary"
                    : "w-2 bg-muted"
                }`}
              />
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}