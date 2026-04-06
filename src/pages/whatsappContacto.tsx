import React, { useEffect, useRef } from "react";
import { Navigate, redirect, replace, useNavigate } from "react-router-dom";

const ContactoPage: React.FC = () => {
  const navigate = useNavigate();
  const telefono = "34629656149";
  const mensaje = encodeURIComponent("Hola, quiero más información");
  const hasRedirected = useRef(false);

  React.useEffect(() => {
    if (hasRedirected.current) return;
    const url = `https://wa.me/${telefono}?text=${mensaje}`;
    hasRedirected.current = true;
    window.open(url, "_blank", "noopener,noreferrer");
    navigate("/");
  }, [navigate]);

  return (
    <div style={{ padding: "100px", textAlign: "center" }}>
      <h2>Redirigiendo a WhatsApp...</h2>
      <p>
        Si no abre automáticamente,{" "}
        <a href={`https://wa.me/${telefono}`}>haz clic aquí</a>.
      </p>
    </div>
  );
};

export default ContactoPage;
