import React, { useRef, useState } from "react";
import { Continente } from "../types";
import { continenteMeta, CONTINENTES } from "../data/continentes";
import { viajes } from "../data/viajes";
import styles from "./ContinentCarousel.module.css";
import { useWindowSize } from "../hooks/useWindowSize";
interface Props {
  onSelect: (c: Continente) => void;
}

const ContinentCarousel: React.FC<Props> = ({ onSelect }) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const { width } = useWindowSize();
  const visible = width >= 1024 ? 3 : width >= 768 ? 2 : 1;

  const countFor = (c: string) => viajes.filter((v) => v.continente === c).length;
  const minPriceFor = (c: string) => {
    const prices = viajes.filter((v) => v.continente === c && v.precioHabDoble).map((v) => v.precioHabDoble!);
    return prices.length ? Math.min(...prices) : null;
  };

  const slide = (dir: 1 | -1) => {
    setOffset((prev) => {
      const next = prev + dir;
      return Math.max(0, Math.min(next, CONTINENTES.length - visible));
    });
  };

  const cardWidthPct = 100 / visible;

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <span className={styles.eyebrow}>Explora por continente</span>
          <h2 className={styles.title}>¿A dónde quieres<br /><em>viajar?</em></h2>
        </div>
        <div className={styles.controls}>
          <button
            className={styles.btn}
            onClick={() => slide(-1)}
            disabled={offset === 0}
            aria-label="Anterior"
          >
            ←
          </button>
          <button
            className={styles.btn}
            onClick={() => slide(1)}
            disabled={offset >= CONTINENTES.length - visible}
            aria-label="Siguiente"
          >
            →
          </button>
        </div>
      </div>

      <div className={styles.trackWrap}>
        <div
          ref={trackRef}
          className={styles.track}
          style={{ transform: `translateX(-${offset * cardWidthPct}%)` }}
        >
          {CONTINENTES.map((c) => {
            const meta = continenteMeta[c];
            const count = countFor(c);
            const minP = minPriceFor(c);
            return (
              <div
                key={c}
                className={styles.card}
                style={{ flex: `0 0 calc(${cardWidthPct}% - 16px)` }}
                onClick={() => onSelect(c as Continente)}
              >
                <div className={styles.cardImgWrap}>
                  <img src={meta.carouselImage} alt={meta.label} loading="lazy" className={styles.cardImg} />
                  <div className={styles.cardOverlay} />
                  <span className={styles.cardEmoji}>{meta.emoji}</span>
                </div>
                <div className={styles.cardBody}>
                  <div className={styles.cardMeta}>
                    <span className={styles.cardCount}>{count} destinos</span>
                    {minP && (
                      <span className={styles.cardPrice}>desde {minP.toLocaleString("es-ES")} €</span>
                    )}
                  </div>
                  <h3 className={styles.cardName}>{meta.label}</h3>
                  <p className={styles.cardTagline}>{meta.tagline}</p>
                  <button className={styles.cardCta}>
                    Explorar <span className={styles.arrow}>→</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className={styles.dots}>
        {Array.from({ length: CONTINENTES.length - visible + 1 }).map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === offset ? styles.dotActive : ""}`}
            onClick={() => setOffset(i)}
            aria-label={`Ir a posición ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default ContinentCarousel;
