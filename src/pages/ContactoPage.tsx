import React, { useState } from "react";
import styles from "./ContactoPage.module.css";

type Status = "idle" | "sending" | "ok" | "error";

const INTERES_OPTS = [
  "Circuito en grupo",
  "Viaje a medida",
  "Europa",
  "Asia",
  "África",
  "América",
  "Oferta especial",
  "Otro",
];

const ContactoPage: React.FC = () => {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    interes: "",
    mensaje: "",
  });
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Simula envío (aquí conectarías tu API / EmailJS / etc.)
    setTimeout(() => setStatus("ok"), 1800);
  };

  return (
    <div className={styles.page}>

      {/* Page header */}
      <div className={styles.pageHeader}>
        <div className={styles.pageHeaderInner}>
          <span className={styles.eyebrow}>Estamos aquí</span>
          <h1 className={styles.title}>Contacta con nosotros</h1>
          <p className={styles.subtitle}>
            ¿Tienes dudas sobre algún viaje? ¿Quieres que te asesoremos sin compromiso?
            Escríbenos y te respondemos en menos de 24 horas.
          </p>
        </div>
      </div>

      <div className={styles.body}>
        <div className={styles.bodyInner}>

          {/* Left: info */}
          <aside className={styles.info}>
            <h2 className={styles.infoTitle}>Información de contacto</h2>

            <div className={styles.infoItems}>
              <div className={styles.infoItem}>
                <span className={styles.infoIcon}>📍</span>
                <div>
                  <strong>Dirección</strong>
                  <p>Calle Gran Vía 24, 3º izq.<br />46008 Valencia, España</p>
                </div>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoIcon}>📞</span>
                <div>
                  <strong>Teléfono</strong>
                  <p><a href="tel:+34963000000">+34 963 000 000</a></p>
                  <p className={styles.infoNote}>Lun–Vie 9:00–19:00 h</p>
                </div>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoIcon}>✉️</span>
                <div>
                  <strong>Email</strong>
                  <p><a href="mailto:info@worldtravel.es">info@worldtravel.es</a></p>
                </div>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoIcon}>💬</span>
                <div>
                  <strong>WhatsApp</strong>
                  <p><a href="https://wa.me/34600000000">+34 600 000 000</a></p>
                </div>
              </div>
            </div>

            <div className={styles.social}>
              <p className={styles.socialLabel}>Síguenos</p>
              <div className={styles.socialLinks}>
                <a href="#" className={styles.socialLink} aria-label="Instagram">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="2" y="2" width="20" height="20" rx="5"/>
                    <circle cx="12" cy="12" r="5"/>
                    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/>
                  </svg>
                </a>
                <a href="#" className={styles.socialLink} aria-label="Facebook">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                </a>
                <a href="#" className={styles.socialLink} aria-label="WhatsApp">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                  </svg>
                </a>
              </div>
            </div>
          </aside>

          {/* Right: form */}
          <div className={styles.formWrap}>
            {status === "ok" ? (
              <div className={styles.success}>
                <span className={styles.successIcon}>✅</span>
                <h3>¡Mensaje enviado!</h3>
                <p>Nos pondremos en contacto contigo en menos de 24 horas.</p>
                <button onClick={() => { setStatus("idle"); setForm({ nombre: "", email: "", telefono: "", interes: "", mensaje: "" }); }}>
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit} noValidate>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="nombre">Nombre completo *</label>
                    <input
                      id="nombre"
                      name="nombre"
                      type="text"
                      className={styles.input}
                      placeholder="Tu nombre"
                      value={form.nombre}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="email">Email *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className={styles.input}
                      placeholder="tu@email.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="telefono">Teléfono</label>
                    <input
                      id="telefono"
                      name="telefono"
                      type="tel"
                      className={styles.input}
                      placeholder="+34 600 000 000"
                      value={form.telefono}
                      onChange={handleChange}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="interes">Me interesa</label>
                    <select
                      id="interes"
                      name="interes"
                      className={styles.select}
                      value={form.interes}
                      onChange={handleChange}
                    >
                      <option value="">Selecciona una opción</option>
                      {INTERES_OPTS.map((o) => (
                        <option key={o} value={o}>{o}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="mensaje">Mensaje *</label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    className={styles.textarea}
                    placeholder="Cuéntanos qué estás buscando, fechas aproximadas, número de personas..."
                    rows={5}
                    value={form.mensaje}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className={styles.submitBtn}
                  disabled={status === "sending"}
                >
                  {status === "sending" ? "Enviando…" : "Enviar mensaje →"}
                </button>

                <p className={styles.privacy}>
                  Al enviar este formulario aceptas nuestra{" "}
                  <a href="#">política de privacidad</a>.
                </p>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactoPage;
