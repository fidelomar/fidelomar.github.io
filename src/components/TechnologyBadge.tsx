import React from "react";
import styles from "./TechnologyBadge.module.css";
import { getTechnologyConfig, TechCategory } from "./technologyCatalog";
import { AppIcon } from "./AppIcon";

export interface TechnologyBadgeProps {
  name: string;
  category?: TechCategory;
  showIcon?: boolean;
  size?: "sm" | "md";
  className?: string;
  style?: React.CSSProperties;
}

export function TechnologyBadge({
  name,
  category: explicitCategory,
  showIcon = true,
  size = "sm",
  className,
  style,
}: TechnologyBadgeProps) {
  const config = getTechnologyConfig(name);
  const displayName = config ? config.canonicalName : name;
  const category = explicitCategory || config?.category || "general";

  // Render icon: Brand ReactIcon or conceptual AppIcon
  let iconElement: React.ReactNode = null;
  if (showIcon) {
    if (config?.reactIcon) {
      const ReactIcon = config.reactIcon;
      iconElement = (
        <span
          className={styles.iconWrapper}
          style={config.iconColor ? { color: config.iconColor } : undefined}
          aria-hidden="true"
        >
          <ReactIcon size={size === "md" ? 15 : 13} />
        </span>
      );
    } else if (config?.appIconName) {
      iconElement = (
        <span
          className={styles.iconWrapper}
          style={config.iconColor ? { color: config.iconColor } : undefined}
          aria-hidden="true"
        >
          <AppIcon name={config.appIconName} size={size === "md" ? 15 : 13} />
        </span>
      );
    }
  }

  const badgeClasses = [
    styles.badge,
    size === "md" ? styles.sizeMd : styles.sizeSm,
    styles[`cat_${category}`] || "",
    className || "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <span className={badgeClasses} style={style}>
      {iconElement}
      <span className={styles.label}>{displayName}</span>
    </span>
  );
}
