import React from "react";
import styles from "./NosotrosPage.module.css";

const VALORES = [
  { icon: "🧭", title: "Experiencia",      desc: "Más de 10 años organizando viajes desde Valencia. Conocemos cada ruta, cada proveedor y cada detalle." },
  { icon: "🤝", title: "Confianza",        desc: "Trabajamos solo con los mejores operadores: Kannak, Itinae, Destinos del Mundo, Special Tours y más." },
  { icon: "💬", title: "Atención cercana", desc: "Somos una agencia local. Puedes llamarnos, escribirnos o visitarnos. Siempre hay alguien al otro lado." },
  { icon: "✨", title: "Calidad",           desc: "Seleccionamos cada viaje con criterio. Si no nos lo quedaríamos nosotros, no te lo ofrecemos." },
];

const EQUIPO = [
  { nombre: "María García",  rol: "Directora y fundadora",    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&q=70" },
  { nombre: "Carlos Martín", rol: "Especialista Asia y Japón", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=70" },
  { nombre: "Laura Sánchez", rol: "Experta Europa",            img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=70" },
  { nombre: "Pablo Torres",  rol: "América y África",          img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=70" },
];

const NosotrosPage: React.FC = () => (
  <div className={styles.page}>

    {/* Hero */}
    <section className={styles.hero}>
      <div className={styles.heroBg} />
      <div className={styles.heroOverlay} />
      <div className={styles.heroContent}>
        <span className={styles.eyebrow}>Quiénes somos</span>
        <h1 className={styles.title}>Viajamos contigo<br /><em>desde Valencia</em></h1>
        <p className={styles.subtitle}>
          Somos una agencia de viajes independiente especializada en circuitos en grupo
          y viajes a medida. Desde 2014 ayudamos a las personas a descubrir el mundo
          con seguridad, calidad y buen precio.
        </p>
      </div>
    </section>

    {/* Historia */}
    <section className={styles.historia}>
      <div className={styles.historiaInner}>
        <div className={styles.historiaImg}>
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=70"
            alt="Nuestro equipo"
          />
        </div>
        <div className={styles.historiaText}>
          <span className={styles.sectionEyebrow}>Nuestra historia</span>
          <h2 className={styles.sectionTitle}>De Valencia al mundo entero</h2>
          <p>
            WorldTravel nació en 2014 con una idea simple: que viajar en grupo no tiene
            por qué ser impersonal. Empezamos organizando pequeños circuitos por Europa
            y hoy operamos en cuatro continentes con más de 80 destinos disponibles.
          </p>
          <p>
            Trabajamos con operadores cuidadosamente seleccionados para garantizar
            la mejor relación calidad-precio. Somos LICENCIA CV-Mm2511-V, miembros
            de ACAVE y estamos completamente asegurados.
          </p>
          <div className={styles.historiaStats}>
            <div className={styles.hStat}><span className={styles.hNum}>10+</span><span className={styles.hLbl}>Años de experiencia</span></div>
            <div className={styles.hStat}><span className={styles.hNum}>80+</span><span className={styles.hLbl}>Destinos</span></div>
            <div className={styles.hStat}><span className={styles.hNum}>2k+</span><span className={styles.hLbl}>Viajeros felices</span></div>
          </div>
        </div>
      </div>
    </section>

    {/* Valores */}
    <section className={styles.valores}>
      <div className={styles.valoresInner}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionEyebrow}>Por qué elegirnos</span>
          <h2 className={styles.sectionTitle}>Nuestros valores</h2>
        </div>
        <div className={styles.valoresGrid}>
          {VALORES.map(({ icon, title, desc }) => (
            <div key={title} className={styles.valorCard}>
              <span className={styles.valorIcon}>{icon}</span>
              <h3 className={styles.valorTitle}>{title}</h3>
              <p className={styles.valorDesc}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Equipo */}
    <section className={styles.equipo}>
      <div className={styles.equipoInner}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionEyebrow}>Las personas detrás</span>
          <h2 className={styles.sectionTitle}>Nuestro equipo</h2>
        </div>
        <div className={styles.equipoGrid}>
          {EQUIPO.map(({ nombre, rol, img }) => (
            <div key={nombre} className={styles.equipoCard}>
              <div className={styles.equipoImgWrap}>
                <img src={img} alt={nombre} className={styles.equipoImg} />
              </div>
              <h4 className={styles.equipoNombre}>{nombre}</h4>
              <p  className={styles.equipoRol}>{rol}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

  </div>
);

export default NosotrosPage;
