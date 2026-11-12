import { IconType } from "react-icons";
import {
  SiDotnet,
  SiShopify,
  SiAnthropic,
  SiGooglegemini,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiGit,
  SiGithub,
  SiDocker,
  SiGoogleplay,
  SiAppstore,
  SiGooglejules,
} from "react-icons/si";
import { TbBrandCSharp, TbBrandAzure, TbSql } from "react-icons/tb";
import { RiOpenaiFill } from "react-icons/ri";
import { IconName } from "./AppIcon";

export type TechCategory =
  | "backend"
  | "frontend"
  | "database"
  | "cloud"
  | "devops"
  | "ecommerce"
  | "mobile"
  | "ai"
  | "general";

export interface TechnologyConfig {
  canonicalName: string;
  category: TechCategory;
  /** react-icons component if available */
  reactIcon?: IconType;
  /** AppIcon conceptual icon if no brand icon */
  appIconName?: IconName;
  /** Optional custom SVG or color accent for the icon */
  iconColor?: string;
}

export const TECHNOLOGY_CATALOG: Record<string, TechnologyConfig> = {
  // Backend & Languages
  ".NET": {
    canonicalName: ".NET",
    category: "backend",
    reactIcon: SiDotnet,
    iconColor: "#512bd4",
  },
  "C#": {
    canonicalName: "C#",
    category: "backend",
    reactIcon: TbBrandCSharp,
    iconColor: "#239120",
  },
  JavaScript: {
    canonicalName: "JavaScript",
    category: "frontend",
    reactIcon: SiJavascript,
    iconColor: "#f7df1e",
  },
  TypeScript: {
    canonicalName: "TypeScript",
    category: "frontend",
    reactIcon: SiTypescript,
    iconColor: "#3178c6",
  },
  React: {
    canonicalName: "React",
    category: "frontend",
    reactIcon: SiReact,
    iconColor: "#149eca",
  },
  "Next.js": {
    canonicalName: "Next.js",
    category: "frontend",
    reactIcon: SiNextdotjs,
    iconColor: "#121926",
  },

  // Databases & Storage
  "SQL Server": {
    canonicalName: "SQL Server",
    category: "database",
    reactIcon: TbSql,
    iconColor: "#cc292b",
  },

  // Cloud & Infrastructure
  Azure: {
    canonicalName: "Azure",
    category: "cloud",
    reactIcon: TbBrandAzure,
    iconColor: "#0078d4",
  },
  Git: {
    canonicalName: "Git",
    category: "devops",
    reactIcon: SiGit,
    iconColor: "#f05032",
  },
  GitHub: {
    canonicalName: "GitHub",
    category: "devops",
    reactIcon: SiGithub,
    iconColor: "#24292f",
  },
  Docker: {
    canonicalName: "Docker",
    category: "devops",
    reactIcon: SiDocker,
    iconColor: "#2496ed",
  },

  // Architecture & APIs (conceptuales sobrios)
  "APIs REST": {
    canonicalName: "APIs REST",
    category: "backend",
    appIconName: "nodes",
    iconColor: "#3d546e",
  },

  // E-commerce & Enterprise platforms
  Shopify: {
    canonicalName: "Shopify",
    category: "ecommerce",
    reactIcon: SiShopify,
    iconColor: "#7ab55c",
  },
  "Mercado Libre": {
    canonicalName: "Mercado Libre",
    category: "ecommerce",
    appIconName: "box",
    iconColor: "#2d3277",
  },

  // Mobile platforms
  "Xamarin Forms": {
    canonicalName: "Xamarin Forms",
    category: "mobile",
    reactIcon: SiDotnet,
    iconColor: "#3498db",
  },
  "Google Play": {
    canonicalName: "Google Play",
    category: "mobile",
    reactIcon: SiGoogleplay,
    iconColor: "#01875f",
  },
  "App Store": {
    canonicalName: "App Store",
    category: "mobile",
    reactIcon: SiAppstore,
    iconColor: "#0071e3",
  },

  // AI & Autonomous Agents
  ChatGPT: {
    canonicalName: "ChatGPT",
    category: "ai",
    reactIcon: RiOpenaiFill,
    iconColor: "#10a37f",
  },
  Claude: {
    canonicalName: "Claude",
    category: "ai",
    reactIcon: SiAnthropic,
    iconColor: "#d97757",
  },
  Gemini: {
    canonicalName: "Gemini",
    category: "ai",
    reactIcon: SiGooglegemini,
    iconColor: "#1a73e8",
  },
  Antigravity: {
    canonicalName: "Antigravity",
    category: "ai",
    appIconName: "bot",
    iconColor: "#0d6878",
  },
  Jules: {
    canonicalName: "Jules",
    category: "ai",
    reactIcon: SiGooglejules,
    iconColor: "#4285f4",
  },
  "OG Engine": {
    canonicalName: "OG Engine",
    category: "ai",
    appIconName: "terminal",
    iconColor: "#0b4f8c",
  },
};

/** Normalizes aliases to canonical names */
const ALIASES: Record<string, string> = {
  dotnet: ".NET",
  "dot net": ".NET",
  "c-sharp": "C#",
  csharp: "C#",
  "rest api": "APIs REST",
  "api rest": "APIs REST",
  apis: "APIs REST",
  sqlserver: "SQL Server",
  "ms sql": "SQL Server",
  "ms sql server": "SQL Server",
  "azure cloud": "Azure",
  nextjs: "Next.js",
  "next js": "Next.js",
  mercadolibre: "Mercado Libre",
  xamarin: "Xamarin Forms",
  googleplay: "Google Play",
  appstore: "App Store",
  openai: "ChatGPT",
  anthropic: "Claude",
};

export function getTechnologyConfig(name: string): TechnologyConfig | null {
  const trimmed = name.trim();
  if (TECHNOLOGY_CATALOG[trimmed]) {
    return TECHNOLOGY_CATALOG[trimmed];
  }
  const lower = trimmed.toLowerCase();
  if (ALIASES[lower] && TECHNOLOGY_CATALOG[ALIASES[lower]]) {
    return TECHNOLOGY_CATALOG[ALIASES[lower]];
  }
  return null;
}
