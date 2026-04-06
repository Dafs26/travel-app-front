import React, { useState } from "react";
import { Continente } from "./types";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ContinentCarousel from "./components/ContinentCarousel";
import ContinentPage from "./components/ContinentPage";
import Footer from "./components/Footer";
import "./index.css";
// import WhatsappBtn from "./components/whatssappbtn";
import Carousel from "./components/carouselNew";

type View = { type: "home" } | { type: "continent"; continent: Continente };

const App: React.FC = () => {
  const [view, setView] = useState<View>({ type: "home" });

  const handleSelectContinent = (c: Continente) => {
    setView({ type: "continent", continent: c });
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  const handleBack = () => {
    setView({ type: "home" });
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  return (
    <>
      <Header onLogoClick={handleBack} />

      {view.type === "home" && (
        <main>
          <HeroSection />
          <Carousel onSelect={handleSelectContinent} />
          <FeatureStrip />
        </main>
      )}

      {view.type === "continent" && (
        <main>
          <ContinentPage
            key={view.continent}
            continent={view.continent}
            onBack={handleBack}
          />
        </main>
      )}
      {/* <WhatsappBtn /> */}
      <Footer />
    </>
  );
};

/* ── Small inline feature strip ── */
const FEATURES = [
  {
    icon: "✈️",
    title: "Vuelos incluidos",
    desc: "La mayoría de nuestros circuitos incluyen vuelo desde Valencia o Madrid.",
  },
  {
    icon: "👥",
    title: "Grupos reducidos",
    desc: "Grupos de máximo 20 personas para una experiencia más personal.",
  },
  {
    icon: "🌍",
    title: "4 continentes",
    desc: "Europa, Asia, África y América. Más de 80 destinos disponibles en 2026.",
  },
  {
    icon: "🏅",
    title: "Operadores premium",
    desc: "Trabajamos con los mejores: Kannak, Itinae, Destinos del Mundo y más.",
  },
];

const FeatureStrip: React.FC = () => (
  <section
    style={{
      background: "var(--ft-navy)",
      padding: "60px 60px",
    }}
  >
    <div
      style={{
        maxWidth: 1280,
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: 32,
      }}
    >
      {FEATURES.map(({ icon, title, desc }) => (
        <div
          key={title}
          style={{ display: "flex", flexDirection: "column", gap: 10 }}
        >
          <span style={{ fontSize: 28 }}>{icon}</span>
          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 15,
              fontWeight: 700,
              color: "#f5ede0",
              letterSpacing: "-0.2px",
            }}
          >
            {title}
          </h3>
          <p
            style={{
              fontSize: 13,
              color: "rgba(255,255,255,0.5)",
              lineHeight: 1.65,
            }}
          >
            {desc}
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default App;
