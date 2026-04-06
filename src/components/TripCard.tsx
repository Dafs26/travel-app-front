import React from "react";
import { Viaje } from "../types";
import { destinoImages } from "../data/continentes";
import styles from "./TripCard.module.css";

const FALLBACK =
  "https://images.unsplash.com/photo-1488085061387-422e29b40080?w=600&q=70";

const tipoLabel: Record<string, string> = {
  plaza_a_plaza_en_grupo: "En grupo",
  cupo: "Cupo",
  plaza_a_plaza: "A medida",
};

const tipoClass: Record<string, string> = {
  plaza_a_plaza_en_grupo: "grupo",
  cupo: "cupo",
  plaza_a_plaza: "medida",
};

interface Props {
  viaje: Viaje;
}

const TripCard: React.FC<Props> = ({ viaje }) => {
  const img = destinoImages[viaje.nombre] ?? FALLBACK;
  const tipo = viaje.tipologia ?? "";

  return (
    <article className={styles.card}>
      <div className={styles.imgWrap}>
        <img
          src={img}
          alt={viaje.nombre}
          loading="lazy"
          className={styles.img}
        />
        {tipo && (
          <span
            className={`${styles.badge} ${styles[tipoClass[tipo] ?? "grupo"]}`}
          >
            {tipoLabel[tipo] ?? tipo}
          </span>
        )}
        {viaje.dias && <span className={styles.days}>{viaje.dias} días</span>}
      </div>
      <div className={styles.body}>
        <h4 className={styles.name}>{viaje.nombre}</h4>
        <div className={styles.metas}>
          {viaje.ciudadSalida && (
            <span className={styles.meta}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                  d="M6 1a3.5 3.5 0 0 1 3.5 3.5C9.5 7.5 6 11 6 11S2.5 7.5 2.5 4.5A3.5 3.5 0 0 1 6 1z"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
                <circle
                  cx="6"
                  cy="4.5"
                  r="1.2"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
              </svg>
              {viaje.ciudadSalida}
            </span>
          )}
          {viaje.mes && (
            <span className={styles.meta}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <rect
                  x="1"
                  y="2.5"
                  width="10"
                  height="8.5"
                  rx="1.5"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
                <path
                  d="M1 5h10M4 1v3M8 1v3"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />
              </svg>
              {viaje.mes}
            </span>
          )}
        </div>
        <div className={styles.footer}>
          {viaje.precioHabDoble ? (
            <div className={styles.price}>
              <span className={styles.priceFrom}>desde</span>
              <span className={styles.priceAmount}>
                {viaje.precioHabDoble.toLocaleString("es-ES")} €
              </span>
              <span className={styles.priceNote}>/ hab. doble</span>
            </div>
          ) : (
            <div className={styles.priceConsult}>Consultar precio</div>
          )}
          {/* <button className={styles.cta}>Ver más →</button> */}
        </div>
      </div>
    </article>
  );
};

export default TripCard;
