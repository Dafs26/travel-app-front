import React from "react";
import styles from "./Header.module.css";
import Logo from "../images/Diseño sin título (2).svg";
interface Props {
  onLogoClick: () => void;
}
const telefono = "34629656149";
const mensaje = encodeURIComponent("Hola quiero saber mas de sus productos");
const Header: React.FC<Props> = ({ onLogoClick }) => (
  <header className={styles.header}>
    <div className={styles.inner}>
      <button className={styles.logo} onClick={onLogoClick}>
        {/* <span className={styles.logoMain}>Friendly</span>
        <span className={styles.logoAccent}>Trips</span> */}
        <img src={Logo} alt="FrienlyTripsValencia" />
      </button>
      <nav className={styles.nav}>
        <a href="#" onClick={onLogoClick}>
          Inicio
        </a>
        <a href="#">Circuitos</a>
        <a href="#">Ofertas</a>
        <a href="#">Nosotros</a>
        <a
          href={`https://wa.me/${telefono}?text=${mensaje}`}
          className={styles.ctaBtn}
        >
          Contacto
        </a>
      </nav>
    </div>
  </header>
);

export default Header;
