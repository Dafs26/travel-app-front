import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const NAV_LINKS = [
  { to: "/", label: "Inicio", end: true },
  { to: "/circuitos", label: "Circuitos", end: false },
  { to: "/ofertas", label: "Ofertas", end: false },
  { to: "/nosotros", label: "Nosotros", end: false },
];

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        {/* Logo */}
        <Link to="/" className={styles.logo} onClick={() => setMenuOpen(false)}>
          <span className={styles.logoMain}>World</span>
          <span className={styles.logoAccent}>Travel</span>
        </Link>

        {/* Desktop nav */}
        <nav className={styles.nav}>
          {NAV_LINKS.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                isActive
                  ? `${styles.navLink} ${styles.navLinkActive}  `
                  : styles.navLink
              }
            >
              {label}
            </NavLink>
          ))}
          <NavLink
            to="/contacto"
            className={({ isActive }) =>
              isActive
                ? `${styles.navLink} ${styles.ctaBtn} ${styles.ctaBtnActive}`
                : `${styles.navLink} ${styles.ctaBtn}`
            }
          >
            Contacto
          </NavLink>
        </nav>

        {/* Hamburger — solo móvil */}
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ""}`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Menú"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`}
      >
        {NAV_LINKS.map(({ to, label, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              isActive
                ? `${styles.mobileLink} ${styles.mobileLinkActive}`
                : styles.mobileLink
            }
            onClick={() => setMenuOpen(false)}
          >
            {label}
          </NavLink>
        ))}
        <NavLink
          to="/contacto"
          className={({ isActive }) =>
            isActive
              ? `${styles.mobileLink} ${styles.mobileLinkCta} ${styles.mobileLinkActive}`
              : `${styles.mobileLink} ${styles.mobileLinkCta}`
          }
          onClick={() => setMenuOpen(false)}
        >
          Contacto
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
