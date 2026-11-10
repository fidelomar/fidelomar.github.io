import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.pageWrapper}>
      <main className={styles.mainContent}>
        <header className={styles.headerIntro}>
          <h1 className={styles.title}>Fidel Omar García</h1>
          <p className={styles.summary}>
            Ingeniero de software especializado en .NET, SQL Server, APIs e integraciones empresariales.
          </p>
          <p className={styles.availability}>
            Disponible para trabajo remoto desde México.
          </p>
        </header>

        <section className={styles.section} aria-labelledby="experience-heading">
          <h2 id="experience-heading" className={styles.sectionTitle}>
            Experiencia
          </h2>
          <p className={styles.sectionText}>
            Enfoque en desarrollo backend robusto, diseño de servicios e integración de plataformas empresariales. Información detallada en proceso de consolidación.
          </p>
        </section>

        <section className={styles.section} aria-labelledby="projects-heading">
          <h2 id="projects-heading" className={styles.sectionTitle}>
            Proyectos
          </h2>
          <p className={styles.sectionText}>
            Casos de estudio y soluciones técnicas orientadas a la confiabilidad y mantenibilidad de software empresarial. Contenido en preparación bajo estrictas políticas de anonimización.
          </p>
        </section>

        <section className={styles.section} aria-labelledby="contact-heading">
          <h2 id="contact-heading" className={styles.sectionTitle}>
            Contacto
          </h2>
          <p className={styles.sectionText}>
            Canal de comunicación profesional validado:
          </p>
          <ul className={styles.contactList}>
            <li className={styles.contactItem}>
              <a
                href="https://www.linkedin.com/in/fidelomar"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn: linkedin.com/in/fidelomar
              </a>
            </li>
          </ul>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Fidel Omar García. Publicado como sitio estático en GitHub Pages.</p>
      </footer>
    </div>
  );
}

