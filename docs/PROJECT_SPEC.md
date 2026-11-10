# Especificación del Proyecto: fidelomar.github.io

## 1. Propósito del Sitio
El sitio web `fidelomar.github.io` tiene como propósito servir como presencia profesional digital y portafolio técnico complementario al currículum vitae de Fidel Omar García. Está enfocado en comunicar de manera sobria, estructurada y verificable su experiencia técnica en ingeniería de software empresarial, con especialización en tecnologías .NET (C#), bases de datos relacionales (SQL Server), diseño e implementación de APIs robustas e integración de sistemas.

## 2. Audiencias Principales
El contenido y la estructura del sitio están diseñados para responder a tres audiencias primarias:
1. **Reclutadores técnicos y gestores de talento (Talent Acquisition):** Buscan validar de forma rápida el stack tecnológico principal, años de experiencia, roles desempeñados, ubicación geográfica y canales formales de contacto profesional.
2. **Líderes técnicos, arquitectos de software y directores de ingeniería (Engineering Leads / Tech Leads):** Buscan profundidad conceptual, criterios de diseño, conocimiento de patrones de arquitectura, buenas prácticas de desarrollo empresarial, tratamiento de casos límite y capacidad de resolución de problemas complejos.
3. **Potenciales clientes y tomadores de decisiones de negocio:** Buscan comprender la capacidad del profesional para traducir requerimientos de negocio en soluciones de software estables, mantenibles, escalables y seguras.

## 3. Objetivos y No Objetivos de la Primera Versión (v1)

### Objetivos
- Publicar un sitio estático minimalista, ordenado y veloz alojado en GitHub Pages.
- Servir como punto central de consulta profesional bajo la URL `https://fidelomar.github.io/`.
- Presentar un resumen claro de capacidades técnicas, trayectoria laboral y casos de estudio desglosados conforme a las reglas de privacidad de la organización.
- Garantizar accesibilidad total (WCAG 2.1 AA) y navegación semántica intuitiva en dispositivos móviles y de escritorio.
- Establecer una arquitectura de archivos y contenidos en español preparada para futura internacionalización (i18n).

### No Objetivos
- No se implementa soporte multiidioma ni traducción al inglés en la versión inicial.
- No se incorporan sistemas de blog interactivo, gestión de comentarios ni base de datos dinámica.
- No se integra procesamiento de formularios del lado del servidor (backend dinámico) en esta etapa.
- No se incluyen animaciones pesadas, elementos gráficos complejos ni librerías visuales superfluas que afecten el rendimiento.
- No se configura dominio personalizado en esta fase (se mantiene estrictamente bajo `fidelomar.github.io`).
- No se publican datos personales directos (teléfono, WhatsApp, correo personal o domicilio).

## 4. Propuesta de Valor Profesional Provisional
Ingeniero de software orientado al desarrollo de soluciones empresariales críticas, especializado en la plataforma .NET (C#), diseño y consumo de APIs RESTful, persistencia y optimización en SQL Server e integración de sistemas corporativos. Enfoque riguroso en la mantenibilidad, confiabilidad operativa, arquitectura limpia y entrega de valor alineada a los objetivos del negocio.

## 5. Principios de Diseño
- **Sobriedad y minimalismo:** Prioridad absoluta a la legibilidad y estructura del contenido sobre ornamentos visuales.
- **Rendimiento por defecto:** Cargas casi instantáneas mediante generación estática pura, minimizando dependencias y scripts de terceros.
- **Accesibilidad universal:** Cumplimiento de estándares de contraste, foco navegable por teclado, etiquetado ARIA y estructura semántica estricta.
- **Transparencia y veracidad:** Cada competencia o proyecto descrito debe corresponder con experiencia real, sin exageraciones ni métricas ficticias.
- **Privacidad estricta:** Respeto riguroso a los acuerdos de confidencialidad y protección de datos personales y corporativos.

## 6. Arquitectura de Contenido Prevista
La estructura de navegación y secciones contempla las siguientes áreas temáticas:

### 6.1. Inicio (`/`)
- Presentación concisa del perfil profesional y especialidad central (.NET, C#, SQL Server, APIs e integraciones).
- Resumen ejecutivo de la propuesta de valor.
- Enlaces rápidos hacia la experiencia laboral relevante y los casos de estudio.
- Ubicación general permitida: "Tampico, Tamaulipas, México" o "México".

### 6.2. Experiencia (`/experiencia`)
- Cronología inversa de trayectoria profesional indicando roles y periodos.
- Responsabilidades principales asumidas en entornos empresariales.
- Tecnologías y herramientas empleadas en cada etapa.
- Énfasis en patrones de diseño, mantenibilidad y estabilidad en producción.

### 6.3. Proyectos o Casos de Estudio (`/proyectos`)
- Fichas estructuradas de proyectos o casos de estudio anonimizados.
- Cada caso desglosa: sector o industria, problema general abordado, rol y responsabilidad, tecnologías clave y resultado o impacto obtenido.
- Estricto apego a no revelar nombres internos de sistemas ni identidades de clientes protegidos por confidencialidad.

### 6.4. Sobre mí (`/sobre-mi`)
- Trayectoria y enfoque metodológico de trabajo.
- Filosofía de ingeniería de software (código limpio, pruebas, observabilidad, robustez).
- Áreas de interés y formación continua en el ecosistema .NET y arquitectura de software.

### 6.5. Contacto (`/contacto`)
- Mecanismos de comunicación profesional validados (por ejemplo, perfil de LinkedIn y repositorio de GitHub).
- Sin exposición de números telefónicos, cuentas de mensajería instantánea ni correos personales.

## 7. Requisitos de SEO (Search Engine Optimization)
- Estructura de encabezados jerárquicos coherente (`h1`, `h2`, `h3`) por página.
- Metadatos esenciales configurados: `title`, `description`, `canonical URL`, `robots` y etiquetas Open Graph / Twitter Cards para previsualización profesional.
- Generación de `sitemap.xml` y `robots.txt` orientados a indexación limpia.
- Uso del atributo `lang="es"` en el elemento raíz HTML.
- Rutas amigables, descriptivas y normalizadas en minúsculas.

## 8. Requisitos de Accesibilidad (a11y)
- Nivel de conformidad objetivo: WCAG 2.1 nivel AA.
- Contraste tipográfico adecuado en esquema de color claro y oscuro (mínimo 4.5:1 para texto normal, 3:1 para texto grande).
- Navegación completa por teclado con indicadores de foco claramente visibles.
- Estructura semántica estricta mediante elementos nativos (`header`, `nav`, `main`, `section`, `article`, `footer`).
- Textos descriptivos en enlaces y botones, evitando textos genéricos ("clic aquí").
- Soporte para preferencias del sistema de reducción de movimiento (`prefers-reduced-motion`).

## 9. Requisitos de Rendimiento
- Puntuación objetivo en Google Lighthouse / Core Web Vitals:
  - Performance: ≥ 95.
  - Accessibility: 100.
  - Best Practices: 100.
  - SEO: 100.
- Despacho como contenido 100% estático (HTML pre-renderizado, CSS crítico optimizado).
- Cero bibliotecas de script pesadas no indispensables.
- Archivos estáticos optimizados y listos para compresión y distribución eficiente por CDN de GitHub Pages.

## 10. Restricciones Técnicas Conocidas
- **Hosting:** GitHub Pages con entrega estática directa.
- **Ruta base:** Raíz del dominio (`https://fidelomar.github.io/`).
- **Sin backend dinámico:** No se dispone de servidor de aplicaciones propio en runtime; cualquier interacción dinámica futura debe delegarse a servicios estáticos o serverless externos debidamente configurados.
- **Separación de ramas:** La rama activa de trabajo y publicación directa de GitHub Pages es `develop`. La rama `main` no se utilizará todavía para desplegar y queda protegida contra commits y merges directos por parte de agentes.

## 11. Riesgos y Decisiones Pendientes
- **Canal de contacto interactivo:** Decidir si en versiones futuras se integrará un servicio externo de formulario serverless (respetando privacidad) o si se mantendrá contacto exclusivo vía perfiles de redes profesionales públicas (LinkedIn / GitHub).
- **Mecanismo de internacionalización futuro:** Determinar si la adición del idioma inglés se realizará mediante subrutas (`/en/`, `/es/`) preservando la generación estática.
- **Estrategia de despliegue continuo:** Diseñar el flujo de GitHub Actions para compilar y desplegar automáticamente en GitHub Pages ejecutándose desde `develop`.

## 12. Definición General de "Terminado" para la Primera Versión (DoD - Definition of Done)
La versión 1.0 se considerará completada cuando cumpla la totalidad de los siguientes criterios:
1. Todas las páginas definidas en la arquitectura de contenido estén creadas, completas y redactadas en español neutro profesional.
2. Todo el contenido cumpla al 100% las directrices estipuladas en `docs/CONTENT_PRIVACY.md`.
3. El sitio compile de forma limpia sin advertencias ni errores en el generador estático.
4. Las pruebas de accesibilidad y auditorías de Lighthouse cumplan las métricas objetivo en entorno de producción o réplica estática.
5. El flujo de despliegue en GitHub Pages opere correctamente bajo `https://fidelomar.github.io/`.
6. El código haya sido revisado y validado en la rama `develop`, asegurando su despliegue sin depender de la rama `main`.

