"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./NavItem.module.css";

export default function NavItem({ href, icon: Icon, text, isExternal }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li className={`${styles.navItem} ${isActive ? styles.active : ""}`}>
      <Link
        href={href}
        className={`${styles.navLink} ${isActive ? styles.active : ""}`}
        target={isExternal ? "_blank" : ""}
        rel={isExternal ? "noopener noreferrer" : ""}
      >
        <div
          className={`${styles.iconWrapper} ${
            isActive ? styles.iconWrapperActive : ""
          }`}
        >
          <Icon className={styles.icon} />
        </div>
        <p className={styles.text}>{text}</p>
      </Link>
    </li>
  );
}
