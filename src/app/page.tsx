import styles from "./page.module.css";
import { contentData } from "../content/profile";
import { AppIcon, IconName } from "../components/AppIcon";

const capabilityMeta: Record<
  string,
  {
    icon: IconName;
    cardModifier: string;
    iconModifier: string;
    isFeatured?: boolean;
    tag?: string;
  }
> = {
  backend: {
    icon: "code",
    cardModifier: styles.capCardBackend,
    iconModifier: styles.capIconBackend,
  },
  databases: {
    icon: "database",
    cardModifier: styles.capCardDatabases,
    iconModifier: styles.capIconDatabases,
  },
  apis: {
    icon: "nodes",
    cardModifier: styles.capCardApis,
    iconModifier: styles.capIconApis,
  },
  modernization: {
    icon: "layers",
    cardModifier: styles.capCardModernization,
    iconModifier: styles.capIconModernization,
  },
  "ai-assisted": {
    icon: "bot",
    cardModifier: styles.capCardAi,
    iconModifier: styles.capIconAi,
    isFeatured: true,
    tag: "Metodología propia",
  },
};

const aiStepIcons: IconName[] = [
  "requirements",
  "terminal",
  "checklist",
  "shield-check",
];

const caseSectorIcons: Record<string, { icon: IconName; type: string }> = {
  "integracion-ecommerce-erp": { icon: "box", type: "ecommerce" },
  "apis-atencion-telefonica": { icon: "phone-waves", type: "telephony" },
  "apps-moviles-campo": { icon: "phone-leaf", type: "mobile" },
};

const workflowBannerSteps: { step: string; label: string; icon: IconName }[] = [
  { step: "01", label: "Comprender", icon: "requirements" },
  { step: "02", label: "Diseñar", icon: "checklist" },
  { step: "03", label: "Ejecutar", icon: "terminal" },
  { step: "04", label: "Validar", icon: "shield-check" },
];

export default function Home() {
  const { profile, capabilities, aiWorkflow, experience, caseStudies, professionalLinks } = contentData;

  return (
    <div className={styles.siteWrapper}>
      {/* 1. Encabezado */}
      <header className={styles.siteHeader}>
        <div className={styles.headerContainer}>
          <a href="#inicio" className={styles.brand} aria-label="Fidel Omar García - Inicio">
            <span className={styles.brandMonogram} aria-hidden="true">
              FG
            </span>
            <span className={styles.brandName}>{profile.name}</span>
          </a>

          <nav className={styles.siteNav} aria-label="Navegación principal">
            <a href="#perfil" className={styles.navLink}>
              Perfil
            </a>
            <a href="#capacidades" className={styles.navLink}>
              Capacidades
            </a>
            <a href="#metodologia-ia" className={styles.navLink}>
              Metodología IA
            </a>
            <a href="#experiencia" className={styles.navLink}>
              Experiencia
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
          <div className={styles.heroBackdrop} aria-hidden="true" />
          <div className={styles.heroContainer}>
            <div className={styles.heroContent}>
              <span className={styles.tagline}>{profile.tagline}</span>
              <h1 id="hero-title" className={styles.title}>
                {profile.name}
              </h1>
              <p className={styles.summary}>{profile.title}</p>
              <p className={styles.experienceSummary}>{profile.experienceSummary}</p>
              <p className={styles.availability}>
                <span className={styles.availabilityDot} aria-hidden="true" />
                {profile.availability}
              </p>
              <div className={styles.heroActions}>
                <a href="#metodologia-ia" className={styles.primaryButton}>
                  Enfoque asistido por IA
                </a>
                <a
                  href={professionalLinks[0].url}
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
                {profile.specialties.map((item, index) => (
                  <li key={item} className={styles.specialtyItem}>
                    <span className={styles.specialtyBullet} aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        {/* 3. Sección de perfil */}
        <section id="perfil" className={`${styles.sectionBand} ${styles.perfilBand}`} aria-labelledby="perfil-heading">
          <div className={styles.sectionInner}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionLabel}>Enfoque</span>
              <h2 id="perfil-heading" className={styles.sectionTitle}>
                Perfil profesional
              </h2>
            </div>
            <div className={styles.profileCard}>
              {profile.paragraphs.map((paragraph, index) => (
                <p key={index} className={styles.profileParagraph}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Sección de capacidades */}
        <section id="capacidades" className={`${styles.sectionBand} ${styles.capacidadesBand}`} aria-labelledby="capacidades-heading">
          <div className={styles.sectionInner}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionLabel}>Competencias</span>
              <h2 id="capacidades-heading" className={styles.sectionTitle}>
                Capacidades técnicas
              </h2>
              <p className={styles.sectionDescription}>
                Áreas de práctica aplicadas al desarrollo, modernización y soporte de software empresarial.
              </p>
            </div>

            <div className={styles.capabilitiesGrid}>
              {capabilities.map((cap) => {
                const meta = capabilityMeta[cap.id];
                return (
                  <article
                    key={cap.id}
                    className={`${styles.capabilityCard} ${meta?.cardModifier || ""} ${
                      meta?.isFeatured ? styles.capabilityCardFeatured : ""
                    }`}
                  >
                    <div className={styles.capabilityTopRow}>
                      <div
                        className={`${styles.capabilityIconWrapper} ${meta?.iconModifier || ""}`}
                      >
                        <AppIcon name={meta?.icon || "code"} size={20} />
                      </div>
                      <div className={styles.capabilityMetaWrapper}>
                        {meta?.tag && (
                          <span className={styles.capabilityTag}>{meta.tag}</span>
                        )}
                        <span className={styles.capabilityNumber} aria-hidden="true">
                          {cap.number}
                        </span>
                      </div>
                    </div>
                    <div className={styles.capabilityContent}>
                      <h3 className={styles.capabilityTitle}>{cap.title}</h3>
                      <p className={styles.capabilityDescription}>{cap.description}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* 4.1. Banner de transición: Marco de trabajo */}
        <section
          className={styles.transitionBanner}
          aria-labelledby="banner-marco-heading"
        >
          <div className={styles.transitionBannerBackdrop} aria-hidden="true" />
          <div className={styles.transitionBannerContainer}>
            <div className={styles.transitionBannerIntro}>
              <span className={styles.transitionBannerTag}>MARCO DE TRABAJO</span>
              <h2 id="banner-marco-heading" className={styles.transitionBannerTitle}>
                De la necesidad humana al cambio validado
              </h2>
              <p className={styles.transitionBannerDescription}>
                Combino análisis técnico, tareas de alcance controlado, ejecución asistida y validación humana antes de integrar cada cambio.
              </p>
            </div>

            <ol className={styles.transitionFlowList} aria-label="Flujo de trabajo resumido">
              {workflowBannerSteps.map((item, index) => (
                <li key={item.step} className={styles.transitionFlowItem}>
                  <div className={styles.transitionFlowCard}>
                    <div className={styles.transitionFlowIconWrapper} aria-hidden="true">
                      <AppIcon name={item.icon} size={20} />
                    </div>
                    <div className={styles.transitionFlowMeta}>
                      <span className={styles.transitionFlowIndex} aria-hidden="true">
                        {item.step}
                      </span>
                      <span className={styles.transitionFlowLabel}>{item.label}</span>
                    </div>
                  </div>
                  {index < workflowBannerSteps.length - 1 && (
                    <div className={styles.transitionFlowConnector} aria-hidden="true">
                      <span className={styles.transitionFlowConnectorLine} />
                    </div>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* 4.5. Sección de Metodología de IA con Supervisión Humana */}
        <section
          id="metodologia-ia"
          className={`${styles.sectionBand} ${styles.aiSectionBand}`}
          aria-labelledby="ia-heading"
        >
          <div className={styles.sectionInner}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionLabel}>Productividad y rigor</span>
              <h2 id="ia-heading" className={styles.sectionTitle}>
                {aiWorkflow.title}
              </h2>
              <p className={styles.sectionDescription}>
                {aiWorkflow.lead}
              </p>
            </div>

            <div className={styles.aiContainer}>
              <div className={styles.aiToolsContainer}>
                <span className={styles.aiToolsLabel}>Agentes y herramientas clave:</span>
                <ul className={styles.aiToolsList}>
                  {aiWorkflow.tools.map((tool) => (
                    <li key={tool} className={styles.aiToolBadge}>
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.aiCallout}>
                <span className={styles.aiCalloutIcon} aria-hidden="true">
                  Criterio
                </span>
                <p className={styles.aiCalloutText}>
                  {aiWorkflow.humanSupervisionNote}
                </p>
              </div>

              <div className={styles.aiStepsFlow}>
                {aiWorkflow.steps.map((step, idx) => {
                  const stepNumber = String(idx + 1).padStart(2, "0");
                  const iconName = aiStepIcons[idx] || "terminal";
                  const isLast = idx === aiWorkflow.steps.length - 1;

                  return (
                    <article
                      key={step.title}
                      className={`${styles.aiStepCard} ${isLast ? styles.aiStepCardFeatured : ""}`}
                    >
                      <div className={styles.aiStepHeader}>
                        <span
                          className={styles.aiStepIndex}
                          aria-label={`Paso ${stepNumber}`}
                        >
                          Paso {stepNumber}
                        </span>
                        <span className={styles.aiStepIconWrapper} aria-hidden="true">
                          <AppIcon name={iconName} size={22} />
                        </span>
                      </div>
                      <div className={styles.aiStepBody}>
                        <h3 className={styles.aiStepTitle}>{step.title}</h3>
                        <p className={styles.aiStepDescription}>{step.description}</p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* 5. Sección de experiencia */}
        <section id="experiencia" className={`${styles.sectionBand} ${styles.experienciaBand}`} aria-labelledby="experiencia-heading">
          <div className={styles.sectionInner}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionLabel}>Trayectoria</span>
              <h2 id="experiencia-heading" className={styles.sectionTitle}>
                Experiencia profesional
              </h2>
              <p className={styles.sectionDescription}>
                Cronología de roles desempeñados en el desarrollo, modernización y soporte de aplicaciones empresariales.
              </p>
            </div>

            <div className={styles.timeline}>
              {experience.map((entry) => (
                <article key={entry.id} className={styles.timelineItem}>
                  <div className={styles.timelineMarker} aria-hidden="true" />
                  <div className={styles.timelineCard}>
                    <header className={styles.timelineHeader}>
                      <div className={styles.timelineMeta}>
                        <h3 className={styles.timelineRole}>{entry.role}</h3>
                        {entry.organization && (
                          <span className={styles.timelineOrg}>{entry.organization}</span>
                        )}
                      </div>
                      <div className={styles.timelineDetails}>
                        <span className={styles.timelinePeriod}>{entry.period}</span>
                        {entry.modality && (
                          <span className={styles.timelineModality}>{entry.modality}</span>
                        )}
                      </div>
                    </header>
                    <p className={styles.timelineDescription}>{entry.description}</p>
                    <ul className={styles.timelineList}>
                      {entry.responsibilities.map((resp, idx) => (
                        <li key={idx} className={styles.timelineListItem}>
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Sección de proyectos (Casos de estudio) */}
        <section id="proyectos" className={`${styles.sectionBand} ${styles.proyectosBand}`} aria-labelledby="proyectos-heading">
          <div className={styles.sectionInner}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionLabel}>Casos de estudio</span>
              <h2 id="proyectos-heading" className={styles.sectionTitle}>
                Proyectos y casos de estudio
              </h2>
              <p className={styles.sectionDescription}>
                Soluciones técnicas estructuradas y presentadas bajo políticas de anonimización y confidencialidad comercial.
              </p>
            </div>

            <div className={styles.caseStudiesGrid}>
              {caseStudies.map((study) => {
                const sectorConfig = caseSectorIcons[study.id] || { icon: "nodes", type: "tools" };

                return (
                  <article
                    key={study.id}
                    className={styles.caseCard}
                    data-sector={sectorConfig.type}
                  >
                    <div className={styles.caseHeader}>
                      <div className={styles.caseHeaderTop}>
                        <div className={styles.caseHeaderMeta}>
                          <span className={styles.caseIconBadge} aria-hidden="true">
                            <AppIcon name={sectorConfig.icon} size={20} />
                          </span>
                          <span className={styles.caseSector}>{study.sector}</span>
                        </div>
                        {study.badge && <span className={styles.caseBadge}>{study.badge}</span>}
                      </div>
                      <h3 className={styles.caseTitle}>{study.title}</h3>
                    </div>

                    <div className={styles.caseContent}>
                      <div className={styles.caseField}>
                        <span className={styles.caseLabel}>Desafío</span>
                        <p className={styles.caseText}>{study.challenge}</p>
                      </div>

                      <div className={styles.caseField}>
                        <span className={styles.caseLabel}>Responsabilidad</span>
                        <p className={styles.caseText}>{study.responsibility}</p>
                      </div>

                      <div className={styles.caseField}>
                        <span className={styles.caseLabel}>Resultado</span>
                        <p className={styles.caseText}>{study.result}</p>
                      </div>
                    </div>

                    <footer className={styles.caseFooter}>
                      <span className={styles.caseTechLabel}>Tecnologías:</span>
                      <ul className={styles.techTagList}>
                        {study.technologies.map((tech) => (
                          <li key={tech} className={styles.techTag}>
                            {tech}
                          </li>
                        ))}
                      </ul>
                    </footer>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* 7. Contacto */}
        <section id="contacto" className={`${styles.sectionBand} ${styles.contactoBand}`} aria-labelledby="contacto-heading">
          <div className={styles.sectionInner}>
            <div className={styles.contactContainer}>
              <div className={styles.contactHeader}>
                <span className={styles.contactLabel}>Comunicación</span>
                <h2 id="contacto-heading" className={styles.contactTitle}>
                  Contacto profesional
                </h2>
                <p className={styles.contactIntro}>
                  Puedes consultar mi trayectoria profesional en LinkedIn y mis proyectos públicos en GitHub.
                </p>
              </div>
              <ul className={styles.contactList}>
                {professionalLinks.map((link) => (
                  <li key={link.url} className={styles.contactChannel}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.contactLink}
                    >
                      <span className={styles.contactLinkLabel}>{link.label}</span>
                      <span className={styles.contactLinkDesc}>{link.description}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>

      {/* 8. Pie de página */}
      <footer className={styles.siteFooter}>
        <div className={styles.footerContainer}>
          <p className={styles.footerCopyright}>
            © {new Date().getFullYear()} {profile.name}
          </p>
          <p className={styles.footerNote}>{profile.tagline}</p>
        </div>
      </footer>
    </div>
  );
}
