import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { viajes } from "../data/viajes";
import { destinoImages, continenteMeta } from "../data/continentes";
import styles from "./OfertasPage.module.css";

const FALLBACK = "https://images.unsplash.com/photo-1488085061387-422e29b40080?w=600&q=70";

/* Ofertas = viajes con precio definido, ordenados por precio asc */
const OfertasPage: React.FC = () => {
  const navigate = useNavigate();

  const ofertas = useMemo(() => {
    const seen = new Set<string>();
    return viajes
      .filter((v) => v.activo && v.precioHabDoble !== null)
      .filter((v) => {
        const key = `${v.continente}-${v.nombre}`;
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
      })
      .sort((a, b) => (a.precioHabDoble ?? 0) - (b.precioHabDoble ?? 0));
  }, []);

  const destacadas = ofertas.slice(0, 3);
  const resto      = ofertas.slice(3);

  return (
    <div className={styles.page}>
      {/* Hero */}
      <div className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>Precios especiales 2026</span>
          <h1 className={styles.title}>Nuestras <em>mejores ofertas</em></h1>
          <p className={styles.subtitle}>
            Los {ofertas.length} destinos con precio confirmado de la temporada.
            Reserva antes de que se agoten las plazas.
          </p>
        </div>
      </div>

      {/* Destacadas */}
      <div className={styles.featured}>
        <div className={styles.featuredInner}>
          <div className={styles.sectionLabel}>
            <span className={styles.sectionEyebrow}>Más populares</span>
            <h2 className={styles.sectionTitle}>Escapadas destacadas</h2>
          </div>
          <div className={styles.featuredGrid}>
            {destacadas.map((v, i) => {
              const img = destinoImages[v.nombre] ?? FALLBACK;
              return (
                <article
                  key={v.nombre}
                  className={`${styles.featCard} ${i === 0 ? styles.featCardBig : ""}`}
                  onClick={() => navigate(`/continente/${v.continente.toLowerCase()}`)}
                >
                  <img src={img} alt={v.nombre} loading="lazy" className={styles.featImg} />
                  <div className={styles.featOverlay} />
                  <div className={styles.featContent}>
                    <span className={styles.featContinent}>
                      {continenteMeta[v.continente]?.emoji} {continenteMeta[v.continente]?.label}
                    </span>
                    <h3 className={styles.featName}>{v.nombre}</h3>
                    {v.dias && <p className={styles.featDays}>{v.dias} días · {v.mes}</p>}
                    <div className={styles.featPrice}>
                      <span className={styles.featFrom}>desde</span>
                      <span className={styles.featAmount}>
                        {v.precioHabDoble!.toLocaleString("es-ES")} €
                      </span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>

      {/* Lista resto */}
      <div className={styles.listSection}>
        <div className={styles.listInner}>
          <h2 className={styles.sectionTitle}>Todos los precios</h2>
          <div className={styles.list}>
            {resto.map((v) => {
              const img = destinoImages[v.nombre] ?? FALLBACK;
              return (
                <article
                  key={`${v.continente}-${v.nombre}`}
                  className={styles.listCard}
                  onClick={() => navigate(`/continente/${v.continente.toLowerCase()}`)}
                >
                  <div className={styles.listImgWrap}>
                    <img src={img} alt={v.nombre} loading="lazy" className={styles.listImg} />
                  </div>
                  <div className={styles.listBody}>
                    <div>
                      <span className={styles.listContinent}>
                        {continenteMeta[v.continente]?.emoji} {continenteMeta[v.continente]?.label}
                      </span>
                      <h3 className={styles.listName}>{v.nombre}</h3>
                      <div className={styles.listMetas}>
                        {v.dias && <span>{v.dias} días</span>}
                        {v.ciudadSalida && <span>✈ {v.ciudadSalida}</span>}
                        {v.proveedor    && <span>{v.proveedor}</span>}
                      </div>
                    </div>
                    <div className={styles.listPriceWrap}>
                      <div className={styles.listPrice}>
                        <span className={styles.listFrom}>desde</span>
                        <span className={styles.listAmount}>
                          {v.precioHabDoble!.toLocaleString("es-ES")} €
                        </span>
                      </div>
                      {v.precioIndividual && (
                        <span className={styles.listIndividual}>
                          Individual: {v.precioIndividual.toLocaleString("es-ES")} €
                        </span>
                      )}
                      <button className={styles.listCta}>Ver viaje →</button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfertasPage;
