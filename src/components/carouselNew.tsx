// import { useCallback, useEffect, useRef, useState } from "react";
// import useEmblaCarousel from "embla-carousel-react";
// import Autoplay from "embla-carousel-autoplay";
// import "./carouselNew.css";
// import { viajes } from "../data/viajes";
// import { continenteMeta, destinoImages } from "../data/continentes";
// import { Continente } from "../types";
// interface Props {
//   onSelect: (c: Continente) => void;
// }
// const Carousel = ({ onSelect }: Props) => {
//   const autoplayPlugin = useRef(
//     Autoplay({ delay: 3000, stopOnMouseEnter: true, stopOnInteraction: false }),
//   );

//   const [emblaRef, emblaApi] = useEmblaCarousel(
//     { loop: true, align: "start" },
//     [autoplayPlugin.current],
//   );

//   const [selectedIndex, setSelectedIndex] = useState(0);
//   const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

//   const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
//   const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
//   const scrollTo = useCallback(
//     (index: number) => emblaApi?.scrollTo(index),
//     [emblaApi],
//   );

//   useEffect(() => {
//     if (!emblaApi) return;
//     setScrollSnaps(emblaApi.scrollSnapList());
//     const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
//     emblaApi.on("select", onSelect);
//     return () => {
//       emblaApi.off("select", onSelect);
//     };
//   }, [emblaApi]);

//   // Filtra solo viajes activos y añade imagen y metadata
//   const slides = viajes
//     .filter((v) => v.activo)
//     .map((v) => {
//       const meta = continenteMeta[v.continente];
//       return {
//         ...v,
//         image: destinoImages[v.nombre] ?? meta?.carouselImage ?? "",
//         accentColor: meta?.accentColor ?? "#333",
//         emoji: meta?.emoji ?? "✈️",
//         label: meta?.label ?? v.continente,
//       };
//     });

//   return (
//     <div className="carousel-wrapper">
//       <div ref={emblaRef} className="carousel-viewport">
//         <div className="carousel-container">
//           {slides.map((slide, index) => (
//             <div
//               key={index}
//               className="carousel-slide"
//               onClick={() => onSelect(slide.continente as Continente)} // ← navegación al continente
//               style={{ cursor: "pointer" }}
//             >
//               <img
//                 src={slide.image}
//                 alt={slide.nombre}
//                 className="carousel-image"
//               />
//               <div
//                 className="carousel-overlay"
//                 style={{ borderBottom: `4px solid ${slide.accentColor}` }}
//               >
//                 <span className="text-sm font-semibold uppercase tracking-widest opacity-80">
//                   {slide.emoji} {slide.label}
//                 </span>
//                 <h3 className="carousel-overlay-title">{slide.nombre}</h3>
//                 <p className="carousel-overlay-desc">
//                   {slide.dias} días · {slide.mes}
//                   {slide.ciudadSalida
//                     ? ` · Salida desde ${slide.ciudadSalida}`
//                     : ""}
//                   {slide.precioHabDoble
//                     ? ` · Desde ${slide.precioHabDoble.toLocaleString("es-ES")} €`
//                     : ""}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <button
//         onClick={scrollPrev}
//         className="carousel-btn carousel-btn-prev"
//         aria-label="Anterior"
//       >
//         ‹
//       </button>
//       <button
//         onClick={scrollNext}
//         className="carousel-btn carousel-btn-next"
//         aria-label="Siguiente"
//       >
//         ›
//       </button>

//       <div className="carousel-dots">
//         {scrollSnaps.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => scrollTo(index)} // ← solo navega al slide, no al continente
//             className={`carousel-dot${index === selectedIndex ? " carousel-dot-active" : ""}`}
//             aria-label={`Ir a slide ${index + 1}`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Carousel;

// CODIGO CON EL CAROUSEL MOSTRANDO TODA LA INFORMAICON POSIBLE DE LOS VIAJES

import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import "./carouselNew.css";
import { continenteMeta, CONTINENTES } from "../data/continentes";
import { Continente } from "../types";

interface Props {
  onSelect: (c: Continente) => void;
}

const Carousel = ({ onSelect }: Props) => {
  const autoplayPlugin = useRef(
    Autoplay({ delay: 3000, stopOnMouseEnter: true, stopOnInteraction: false }),
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [autoplayPlugin.current],
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi],
  );

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    const onSnap = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSnap);
    return () => {
      emblaApi.off("select", onSnap);
    };
  }, [emblaApi]);

  return (
    <div className="carousel-wrapper">
      <div ref={emblaRef} className="carousel-viewport">
        <div className="carousel-container">
          {CONTINENTES.map((continente, index) => {
            const meta = continenteMeta[continente];
            return (
              <div
                key={continente}
                className="carousel-slide"
                onClick={() => onSelect(continente as Continente)}
                style={{ cursor: "pointer" }}
              >
                <img
                  src={meta.carouselImage}
                  alt={meta.label}
                  className="carousel-image"
                />
                <div
                  className="carousel-overlay"
                  style={{ borderBottom: `4px solid ${meta.accentColor}` }}
                >
                  <span className="text-sm font-semibold uppercase tracking-widest opacity-80">
                    {meta.emoji}
                  </span>
                  <h3 className="carousel-overlay-title">{meta.label}</h3>
                  <p className="carousel-overlay-desc">{meta.tagline}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <button
        onClick={scrollPrev}
        className="carousel-btn carousel-btn-prev"
        aria-label="Anterior"
      >
        ‹
      </button>
      <button
        onClick={scrollNext}
        className="carousel-btn carousel-btn-next"
        aria-label="Siguiente"
      >
        ›
      </button>

      <div className="carousel-dots">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`carousel-dot${index === selectedIndex ? " carousel-dot-active" : ""}`}
            aria-label={`Ir a slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
