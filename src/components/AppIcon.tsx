import React from "react";

export type IconName =
  | "search-code"
  | "terminal"
  | "checklist"
  | "shield-check"
  | "nodes"
  | "box"
  | "phone-waves"
  | "phone-leaf";

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
  size?: number;
  className?: string;
}

export function AppIcon({ name, size = 24, className, ...rest }: IconProps) {
  const commonProps = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": "true" as const,
    focusable: "false" as const,
    className,
    ...rest,
  };

  switch (name) {
    /* 1. Metodología IA: Análisis de código heredado (lupa + código) */
    case "search-code":
      return (
        <svg {...commonProps}>
          <circle cx="11" cy="11" r="7" />
          <path d="M21 21l-4.35-4.35" />
          <path d="M9 9.5L7.5 11l1.5 1.5" />
          <path d="M13 9.5l1.5 1.5-1.5 1.5" />
        </svg>
      );

    /* 2. Metodología IA: Especificación e implementación (terminal de comandos técnica) */
    case "terminal":
      return (
        <svg {...commonProps}>
          <rect x="3" y="4" width="18" height="16" rx="3" />
          <path d="M7 9l3.5 3L7 15" />
          <line x1="13" y1="15" x2="17" y2="15" />
        </svg>
      );

    /* 3. Metodología IA: Documentación y casos de prueba (lista de verificación técnica) */
    case "checklist":
      return (
        <svg {...commonProps}>
          <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
          <rect x="9" y="3" width="6" height="4" rx="1" />
          <path d="M9 12l2 2 4-4" />
          <line x1="9" y1="17" x2="15" y2="17" />
        </svg>
      );

    /* 4. Metodología IA: Auditoría y validación humana (escudo con verificación de control) */
    case "shield-check":
      return (
        <svg {...commonProps}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );

    /* 5. Casos de estudio: Herramientas de ingeniería / Orquestador (red de nodos conectados) */
    case "nodes":
      return (
        <svg {...commonProps}>
          <circle cx="6" cy="6" r="2.5" />
          <circle cx="18" cy="6" r="2.5" />
          <circle cx="12" cy="18" r="2.5" />
          <line x1="8.5" y1="6" x2="15.5" y2="6" />
          <line x1="7.8" y1="8.2" x2="10.5" y2="15.8" />
          <line x1="16.2" y1="8.2" x2="13.5" y2="15.8" />
        </svg>
      );

    /* 6. Casos de estudio: Comercio electrónico e integración ERP (caja de distribución / logística) */
    case "box":
      return (
        <svg {...commonProps}>
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      );

    /* 7. Casos de estudio: Atención telefónica / IVR (teléfono con ondas de señal / APIs) */
    case "phone-waves":
      return (
        <svg {...commonProps}>
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          <path d="M14 3a5 5 0 0 1 5 5" />
          <path d="M14 7a1.5 1.5 0 0 1 1.5 1.5" />
        </svg>
      );

    /* 8. Casos de estudio: Aplicaciones móviles para campo (dispositivo móvil con detalle agronómico/hoja) */
    case "phone-leaf":
      return (
        <svg {...commonProps}>
          <rect x="4" y="3" width="10" height="18" rx="2" />
          <line x1="8" y1="18" x2="10" y2="18" />
          <path d="M15 8c2.5 0 5 1.5 5 4.5 0 2-1.5 3.5-3.5 3.5H15V8z" />
          <path d="M15 16c1-2 2-4.5 4-5" />
        </svg>
      );

    default:
      return null;
  }
}
