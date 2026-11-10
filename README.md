# fidelomar.github.io

Sitio web profesional y portafolio técnico de **Fidel Omar García**, ingeniero de software especializado en el ecosistema .NET (C#), bases de datos SQL Server, arquitectura de APIs e integración de sistemas empresariales.

El sitio está concebido como una presencia digital minimalista, sobria, accesible y de alto rendimiento, publicada como exportación 100% estática en GitHub Pages bajo la URL `https://fidelomar.github.io/`.

---

## Documentos Normativos del Proyecto

Antes de proponer o realizar cualquier modificación en este repositorio, es obligatorio consultar y acatar los siguientes documentos:

- [`AGENTS.md`](./AGENTS.md): Reglas de colaboración vinculantes, delimitación del alcance, estándares de código, prohibición de datos sensibles e inventados, y política de ramas.
- [`docs/PROJECT_SPEC.md`](./docs/PROJECT_SPEC.md): Especificación del proyecto, principios de diseño, audiencias, arquitectura de contenido y criterios de aceptación.
- [`docs/CONTENT_PRIVACY.md`](./docs/CONTENT_PRIVACY.md): Políticas estrictas de privacidad, anonimización de proyectos corporativos y lista de verificación previa a publicación.

---

## Rama de Desarrollo y Despliegue

- **Rama activa de trabajo y publicación:** `develop`.
- Todo el desarrollo, validación y eventual publicación automática en GitHub Pages se realiza desde la rama `develop`.
- La rama `main` no se utilizará todavía para desplegar y queda terminantemente prohibido realizar commits directos o merges hacia ella.

---

## Requisitos Previos

- **Node.js:** Versión LTS recomendada (v20 o superior).
- **npm:** Gestor de paquetes oficial incluido con Node.js.

---

## Instalación

Clona el repositorio, asegúrate de situarte en la rama `develop` e instala las dependencias:

```bash
git checkout develop
npm install
```

---

## Ejecución en Entorno Local

Para iniciar el servidor de desarrollo local de Next.js:

```bash
npm run dev
```

El sitio estará disponible en [http://localhost:3000](http://localhost:3000).

---

## Validación y Control de Calidad

El proyecto cuenta con scripts dedicados para comprobar la integridad del código, el tipado estático y las reglas de estilo:

```bash
# Comprobación de tipos con TypeScript (sin emitir archivos)
npm run typecheck

# Análisis estático de código con ESLint
npm run lint
```

---

## Generación Estática (Build para Producción)

El proyecto está configurado con exportación puramente estática (`output: "export"` en `next.config.ts`), sin dependencias de un servidor Node.js en tiempo de ejecución:

```bash
npm run build
```

Este comando compila la aplicación y genera la carpeta `out/` con todos los recursos HTML, CSS y JavaScript pre-renderizados, listos para ser servidos por GitHub Pages.

