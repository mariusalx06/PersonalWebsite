"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useCallback } from "react";
import styles from "./NavItem.module.css";

export default function NavItem({ href, icon: Icon, text, isExternal }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  const handleScroll = useCallback((href) => {
    const containerId = href === "/" ? "leftContainer" : "rightContainer";
    const container = document.getElementById(containerId);
    container?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <li className={`${styles.navItem} ${isActive ? styles.active : ""}`}>
      <Link
        href={href}
        className={`${styles.navLink} ${isActive ? styles.active : ""}`}
        onClick={() => handleScroll(href)}
      >
        <div
          className={`${styles.iconWrapper} ${
            isActive ? styles.iconWrapperActive : ""
          }`}
        >
          <Icon className={styles.icon} />
        </div>

        <div
          className={`${styles.textWrapper} ${
            isActive ? styles.textWrapperVisible : ""
          }`}
        >
          {text}
        </div>
      </Link>
    </li>
  );
}
