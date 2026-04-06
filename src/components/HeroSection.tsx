import React from "react";
import styles from "./HeroSection.module.css";

const HeroSection: React.FC = () => (
  <section className={styles.hero}>
    <div className={styles.bgImage} />
    <div className={styles.overlay} />
    <div className={styles.content}>
      <span className={styles.eyebrow}>Catálogo 2026 · Valencia & Madrid</span>
      <h1 className={styles.title}>
        Viaja al mundo
        <br />
        <em>con nosotros</em>
      </h1>
      <p className={styles.subtitle}>
        Circuitos en grupo, viajes a medida y experiencias únicas en cuatro
        continentes. Tu próxima aventura empieza aquí.
      </p>
      <div className={styles.stats}>
        {[
          { n: "80+", l: "Destinos" },
          { n: "4", l: "Continentes" },
          { n: "2026", l: "Temporada" },
        ].map(({ n, l }) => (
          <div key={l} className={styles.stat}>
            <span className={styles.statNum}>{n}</span>
            <span className={styles.statLabel}>{l}</span>
          </div>
        ))}
      </div>
      <div className={styles.scrollHint}>
        <span>Explora continentes</span>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path
            d="M7 2v10M3 8l4 4 4-4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  </section>
);

export default HeroSection;
