"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./NavItem.module.css";

export default function NavItem({ href, icon: Icon, text, isExternal }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  const handleScroll = (href) => {
    if (href === "/") {
      const leftContainer = document.getElementById("leftContainer");
      if (leftContainer) {
        console.log("Left container found:", leftContainer);
        leftContainer.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        console.log("Left container not found!");
      }
    } else {
      const rightContainer = document.getElementById("rightContainer");
      if (rightContainer) {
        console.log("Right container found:", rightContainer);
        rightContainer.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        console.log("Right container not found!");
      }
    }
  };

  return (
    <li className={`${styles.navItem} ${isActive ? styles.active : ""}`}>
      <Link
        href={href}
        className={`${styles.navLink} ${isActive ? styles.active : ""}`}
        target={isExternal ? "_blank" : ""}
        rel={isExternal ? "noopener noreferrer" : ""}
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
