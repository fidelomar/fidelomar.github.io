import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.siteWrapper}>
      {/* 1. Encabezado */}
      <header className={styles.siteHeader}>
        <div className={styles.headerContainer}>
          <a href="#inicio" className={styles.brand} aria-label="Fidel Omar García - Inicio">
            <span className={styles.brandMonogram} aria-hidden="true">
              FG
            </span>
            <span className={styles.brandName}>Fidel Omar García</span>
          </a>

          <nav className={styles.siteNav} aria-label="Navegación principal">
            <a href="#perfil" className={styles.navLink}>
              Perfil
            </a>
            <a href="#capacidades" className={styles.navLink}>
              Capacidades
            </a>
            <a href="#proyectos" className={styles.navLink}>
              Proyectos
            </a>
            <a href="#contacto" className={styles.navLink}>
              Contacto
            </a>
          </nav>
        </div>
      </header>

      {/* Contenido Principal */}
      <main id="main-content" className={styles.mainContent}>
        {/* 2. Hero */}
        <section id="inicio" className={styles.heroSection} aria-labelledby="hero-title">
          <div className={styles.heroContent}>
            <span className={styles.tagline}>Ingeniería de software empresarial</span>
            <h1 id="hero-title" className={styles.title}>
              Fidel Omar García
            </h1>
            <p className={styles.summary}>
              Ingeniero de software especializado en .NET, SQL Server, APIs e integraciones empresariales.
            </p>
            <p className={styles.availability}>
              <span className={styles.availabilityDot} aria-hidden="true" />
              Disponible para trabajo remoto desde México.
            </p>
            <div className={styles.heroActions}>
              <a href="#capacidades" className={styles.primaryButton}>
                Ver capacidades técnicas
              </a>
              <a
                href="https://www.linkedin.com/in/fidelomar"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.secondaryButton}
              >
                LinkedIn (perfil profesional)
              </a>
            </div>
          </div>

          <aside className={styles.heroPanel} aria-label="Especialidades principales">
            <div className={styles.panelHeader}>
              <h2 className={styles.panelTitle}>Especialidades</h2>
              <span className={styles.panelBadge}>Stack base</span>
            </div>
            <ul className={styles.specialtyList}>
              <li className={styles.specialtyItem}>
                <span className={styles.specialtyBullet} aria-hidden="true">
                  01
                </span>
                <span>C# / .NET</span>
              </li>
              <li className={styles.specialtyItem}>
                <span className={styles.specialtyBullet} aria-hidden="true">
                  02
                </span>
                <span>SQL Server</span>
              </li>
              <li className={styles.specialtyItem}>
                <span className={styles.specialtyBullet} aria-hidden="true">
                  03
                </span>
                <span>APIs REST</span>
              </li>
              <li className={styles.specialtyItem}>
                <span className={styles.specialtyBullet} aria-hidden="true">
                  04
                </span>
                <span>Integraciones empresariales</span>
              </li>
            </ul>
          </aside>
        </section>

        {/* 3. Sección de perfil */}
        <section id="perfil" className={styles.section} aria-labelledby="perfil-heading">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Enfoque</span>
            <h2 id="perfil-heading" className={styles.sectionTitle}>
              Perfil profesional
            </h2>
          </div>
          <div className={styles.profileCard}>
            <p className={styles.profileLead}>
              Enfoque en desarrollo backend robusto, diseño de servicios e integración de plataformas empresariales. Información detallada en proceso de consolidación.
            </p>
          </div>
        </section>

        {/* 4. Sección de capacidades */}
        <section id="capacidades" className={styles.section} aria-labelledby="capacidades-heading">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Competencias</span>
            <h2 id="capacidades-heading" className={styles.sectionTitle}>
              Capacidades técnicas
            </h2>
            <p className={styles.sectionDescription}>
              Áreas de práctica aplicadas al diseño y mantenimiento de software corporativo con altos estándares de estabilidad y mantenibilidad.
            </p>
          </div>

          <div className={styles.cardsGrid}>
            <article className={styles.card}>
              <div className={styles.cardHeader}>
                <span className={styles.cardIndex} aria-hidden="true">
                  01
                </span>
                <h3 className={styles.cardTitle}>Desarrollo backend</h3>
              </div>
              <p className={styles.cardBody}>
                Construcción de servicios y lógica de negocio orientada a la confiabilidad, aplicando buenas prácticas de arquitectura y código limpio.
              </p>
            </article>

            <article className={styles.card}>
              <div className={styles.cardHeader}>
                <span className={styles.cardIndex} aria-hidden="true">
                  02
                </span>
                <h3 className={styles.cardTitle}>Bases de datos</h3>
              </div>
              <p className={styles.cardBody}>
                Diseño relacional, persistencia y optimización de consultas estructuradas para el tratamiento consistente de datos transaccionales.
              </p>
            </article>

            <article className={styles.card}>
              <div className={styles.cardHeader}>
                <span className={styles.cardIndex} aria-hidden="true">
                  03
                </span>
                <h3 className={styles.cardTitle}>APIs e integraciones</h3>
              </div>
              <p className={styles.cardBody}>
                Diseño e implementación de interfaces de programación e intercambio seguro de información entre sistemas empresariales heterogéneos.
              </p>
            </article>

            <article className={styles.card}>
              <div className={styles.cardHeader}>
                <span className={styles.cardIndex} aria-hidden="true">
                  04
                </span>
                <h3 className={styles.cardTitle}>Modernización de sistemas</h3>
              </div>
              <p className={styles.cardBody}>
                Evolución y estabilización de aplicaciones empresariales existentes, priorizando la continuidad operativa y la escalabilidad técnica.
              </p>
            </article>
          </div>
        </section>

        {/* 5. Sección de proyectos */}
        <section id="proyectos" className={styles.section} aria-labelledby="proyectos-heading">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Casos de estudio</span>
            <h2 id="proyectos-heading" className={styles.sectionTitle}>
              Proyectos
            </h2>
          </div>
          <div className={styles.projectsPlaceholder}>
            <span className={styles.placeholderStatus}>En preparación</span>
            <h3 className={styles.placeholderTitle}>Casos de estudio y soluciones técnicas</h3>
            <p className={styles.placeholderText}>
              Casos de estudio y soluciones técnicas orientadas a la confiabilidad y mantenibilidad de software empresarial. Contenido en preparación bajo estrictas políticas de anonimización.
            </p>
          </div>
        </section>

        {/* 6. Contacto */}
        <section id="contacto" className={styles.section} aria-labelledby="contacto-heading">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Comunicación</span>
            <h2 id="contacto-heading" className={styles.sectionTitle}>
              Contacto
            </h2>
          </div>
          <div className={styles.contactCard}>
            <ul className={styles.contactList}>
              <li className={styles.contactChannel}>
                <a
                  href="https://www.linkedin.com/in/fidelomar"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn: linkedin.com/in/fidelomar (perfil profesional)
                </a>
              </li>
            </ul>
            <p className={styles.contactNote}>
              Canal de comunicación profesional validado. Los enlaces hacia repositorios públicos de GitHub y correo profesional verificado se habilitarán formalmente en etapas posteriores.
            </p>
          </div>
        </section>
      </main>

      {/* 7. Pie de página */}
      <footer className={styles.siteFooter}>
        <div className={styles.footerContainer}>
          <p className={styles.footerCopyright}>
            © {new Date().getFullYear()} Fidel Omar García
          </p>
          <p className={styles.footerNote}>Ingeniería de software empresarial</p>
        </div>
      </footer>
    </div>
  );
}
