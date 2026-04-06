import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { viajes } from "../data/viajes";
import { destinoImages, CONTINENTES, continenteMeta } from "../data/continentes";
import { Continente, Tipologia } from "../types";
import styles from "./CircuitosPage.module.css";

const FALLBACK = "https://images.unsplash.com/photo-1488085061387-422e29b40080?w=600&q=70";

const TIPO_LABEL: Record<string, string> = {
  plaza_a_plaza_en_grupo: "En grupo",
  cupo: "Cupo",
  plaza_a_plaza: "A medida",
};

const CircuitosPage: React.FC = () => {
  const navigate = useNavigate();
  const [continente, setContinente] = useState<Continente | "all">("all");
  const [tipologia, setTipologia] = useState<Tipologia | "all">("all");
  const [orden, setOrden] = useState<"precio-asc" | "precio-desc" | "dias">("precio-asc");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    const seen = new Set<string>();
    return viajes
      .filter((v) => v.activo)
      .filter((v) => {
        if (seen.has(`${v.continente}-${v.nombre}`)) return false;
        seen.add(`${v.continente}-${v.nombre}`);
        return true;
      })
      .filter((v) => continente === "all" || v.continente === continente)
      .filter((v) => tipologia === "all" || v.tipologia === tipologia)
      .filter((v) => v.nombre.toLowerCase().includes(search.toLowerCase()))
      .sort((a, b) => {
        if (orden === "precio-asc")  return (a.precioHabDoble ?? 9999) - (b.precioHabDoble ?? 9999);
        if (orden === "precio-desc") return (b.precioHabDoble ?? 0)    - (a.precioHabDoble ?? 0);
        return (a.dias ?? 0) - (b.dias ?? 0);
      });
  }, [continente, tipologia, orden, search]);

  return (
    <div className={styles.page}>
      {/* Page header */}
      <div className={styles.pageHeader}>
        <div className={styles.pageHeaderInner}>
          <span className={styles.eyebrow}>Catálogo 2026</span>
          <h1 className={styles.title}>Todos los circuitos</h1>
          <p className={styles.subtitle}>
            {filtered.length} viajes disponibles en {CONTINENTES.length} continentes
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className={styles.filterBar}>
        <div className={styles.filterBarInner}>
          <div className={styles.filterGroup}>
            <label className={styles.filterLabel}>Continente</label>
            <select
              className={styles.select}
              value={continente}
              onChange={(e) => setContinente(e.target.value as Continente | "all")}
            >
              <option value="all">Todos</option>
              {CONTINENTES.map((c) => (
                <option key={c} value={c}>{continenteMeta[c].label}</option>
              ))}
            </select>
          </div>

          <div className={styles.filterGroup}>
            <label className={styles.filterLabel}>Tipo</label>
            <select
              className={styles.select}
              value={tipologia ?? "all"}
              onChange={(e) => setTipologia(e.target.value as Tipologia | "all")}
            >
              <option value="all">Todos</option>
              <option value="plaza_a_plaza_en_grupo">En grupo</option>
              <option value="cupo">Cupo</option>
              <option value="plaza_a_plaza">A medida</option>
            </select>
          </div>

          <div className={styles.filterGroup}>
            <label className={styles.filterLabel}>Ordenar</label>
            <select
              className={styles.select}
              value={orden}
              onChange={(e) => setOrden(e.target.value as typeof orden)}
            >
              <option value="precio-asc">Precio: menor primero</option>
              <option value="precio-desc">Precio: mayor primero</option>
              <option value="dias">Duración</option>
            </select>
          </div>

          <div className={styles.searchWrap}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className={styles.searchIcon}>
              <circle cx="6" cy="6" r="4.5" stroke="currentColor" strokeWidth="1.3"/>
              <path d="M10 10l2.5 2.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
            </svg>
            <input
              type="text"
              placeholder="Buscar destino..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className={styles.searchInput}
            />
          </div>

          {(continente !== "all" || tipologia !== "all" || search) && (
            <button
              className={styles.clearBtn}
              onClick={() => { setContinente("all"); setTipologia("all"); setSearch(""); }}
            >
              Limpiar
            </button>
          )}
        </div>
      </div>

      {/* Grid */}
      <div className={styles.content}>
        {filtered.length === 0 ? (
          <div className={styles.empty}>
            <span>🔍</span>
            <p>No hay resultados para esa búsqueda.</p>
            <button onClick={() => { setContinente("all"); setTipologia("all"); setSearch(""); }}>
              Ver todos los circuitos
            </button>
          </div>
        ) : (
          <div className={styles.grid}>
            {filtered.map((v) => {
              const img = destinoImages[v.nombre] ?? FALLBACK;
              const tipo = v.tipologia ?? "";
              return (
                <article
                  key={`${v.continente}-${v.nombre}`}
                  className={styles.card}
                  onClick={() => navigate(`/continente/${v.continente.toLowerCase()}`)}
                >
                  <div className={styles.cardImgWrap}>
                    <img src={img} alt={v.nombre} loading="lazy" className={styles.cardImg} />
                    <div className={styles.cardImgOverlay} />
                    {tipo && (
                      <span className={`${styles.badge} ${styles[tipo.replace(/_/g, "")]}`}>
                        {TIPO_LABEL[tipo]}
                      </span>
                    )}
                    <span className={styles.continent}>
                      {continenteMeta[v.continente]?.emoji} {continenteMeta[v.continente]?.label}
                    </span>
                  </div>
                  <div className={styles.cardBody}>
                    <h3 className={styles.cardTitle}>{v.nombre}</h3>
                    <div className={styles.cardMetas}>
                      {v.dias     && <span className={styles.meta}>📅 {v.dias} días</span>}
                      {v.ciudadSalida && <span className={styles.meta}>✈️ {v.ciudadSalida}</span>}
                      {v.mes      && <span className={styles.meta}>🗓 {v.mes}</span>}
                      {v.proveedor && <span className={styles.meta}>⭐ {v.proveedor}</span>}
                    </div>
                    <div className={styles.cardFooter}>
                      {v.precioHabDoble ? (
                        <div className={styles.price}>
                          <span className={styles.priceFrom}>desde</span>
                          <span className={styles.priceAmount}>
                            {v.precioHabDoble.toLocaleString("es-ES")} €
                          </span>
                          <span className={styles.priceNote}>/ hab. doble</span>
                        </div>
                      ) : (
                        <span className={styles.priceConsult}>Consultar precio</span>
                      )}
                      <span className={styles.cta}>Ver más →</span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default CircuitosPage;
