"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./NavItem.module.css";

export default function NavItem({ href, icon: Icon, label }) {
  const pathname = usePathname();

  const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={`${styles.link} ${isActive ? styles.active : ""}`}
    >
      <Icon />
      <span>{label}</span>
    </Link>
  );
}
