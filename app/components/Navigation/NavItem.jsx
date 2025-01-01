"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useCallback, useState, useEffect } from "react";
import styles from "./NavItem.module.css";

export default function NavItem({ href, icon: Icon }) {
  const pathname = usePathname();
  const isActive = pathname === href && href !== "#top";
  const [isAtTop, setIsAtTop] = useState(false);

  useEffect(() => {
    const checkIfAtTop = () => {
      setIsAtTop(window.scrollY === 0);
    };

    window.addEventListener("scroll", checkIfAtTop);

    checkIfAtTop();

    return () => {
      window.removeEventListener("scroll", checkIfAtTop);
    };
  }, []);

  const handleScroll = useCallback((href) => {
    if (href === "#top") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      const containerId = href === "/" ? "leftContainer" : "rightContainer";
      const container = document.getElementById(containerId);
      container?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <li className={`${styles.navItem} ${isActive ? styles.active : ""}`}>
      {href !== "#top" ? (
        <Link
          href={href}
          className={`${styles.navLink} ${isActive ? styles.active : ""}`}
          scroll={false}
          onClick={() => handleScroll(href)}
        >
          <div
            className={`${styles.iconWrapper} ${
              isActive ? styles.iconWrapperActive : ""
            }`}
          >
            <Icon className={styles.icon} />
          </div>
        </Link>
      ) : (
        <button
          className={styles.scrollToTopButton}
          onClick={() => handleScroll(href)}
          disabled={isAtTop}
        >
          <Icon className={styles.icon} />
        </button>
      )}
    </li>
  );
}
