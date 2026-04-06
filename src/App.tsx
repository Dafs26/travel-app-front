import React from "react";
import { Routes, Route, useNavigate, useParams } from "react-router-dom";
import { Continente } from "./types";
import { CONTINENTES } from "./data/continentes";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ContinentCarousel from "./components/ContinentCarousel";
import ContinentPage from "./components/ContinentPage";
import Footer from "./components/Footer";
import CircuitosPage from "./pages/CircuitosPage";
import OfertasPage from "./pages/OfertasPage";
import NosotrosPage from "./pages/NosotrosPage";
import ContactoPage from "./pages/ContactoPage";
import "./index.css";

/* ─── Layout: Header + Footer siempre visibles ─── */
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

/* ─── Página de inicio ─── */
const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const handleSelect = (c: Continente) => {
    navigate(`/continente/${c.toLowerCase()}`);
    window.scrollTo({ top: 0, behavior: "instant" });
  };
  return (
    <>
      <HeroSection />
      <ContinentCarousel onSelect={handleSelect} />
      <FeatureStrip />
    </>
  );
};

/* ─── Página de continente ─── */
const ContinentRoute: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const continent = CONTINENTES.find((c) => c.toLowerCase() === slug) as
    | Continente
    | undefined;
  if (!continent) {
    navigate("/", { replace: true });
    return null;
  }
  return (
    <ContinentPage
      continent={continent}
      onBack={() => {
        navigate("/");
        window.scrollTo({ top: 0, behavior: "instant" });
      }}
    />
  );
};

/* ─── Scroll to top en cada cambio de ruta ─── */
const ScrollToTop: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  });
  return null;
};

/* ─── App ─── */
const App: React.FC = () => (
  <Layout>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/continente/:slug" element={<ContinentRoute />} />
      <Route path="/circuitos" element={<CircuitosPage />} />
      <Route path="/ofertas" element={<OfertasPage />} />
      <Route path="/nosotros" element={<NosotrosPage />} />
      <Route path="/contacto" element={<ContactoPage />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  </Layout>
);

/* ─── Feature strip ─── */
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
  <section className="feature-strip">
    <div className="feature-strip__grid">
      {FEATURES.map(({ icon, title, desc }) => (
        <div key={title} className="feature-strip__item">
          <span className="feature-strip__icon">{icon}</span>
          <h3 className="feature-strip__title">{title}</h3>
          <p className="feature-strip__desc">{desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default App;
