"use client";
import PersonIcon from "@mui/icons-material/Person";
import SchoolIcon from "@mui/icons-material/School";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";

import styles from "./Navbar.module.css";
import NavItem from "./NavItem";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.header}>
        <div className={styles.left}>
          <div className={styles.mc}>
            <p>MC</p>
          </div>
          <div className={styles.rightText}>
            <p className={styles.name}>Marius Calin</p>
            <p className={styles.title}>Web Developer</p>
          </div>
        </div>

        <div className={styles.right}>
          <NavItem
            href="/contact"
            icon={PermContactCalendarIcon}
            label="Contact"
          />
        </div>
      </div>

      <div className={styles.navLinks}>
        <NavItem href="/" icon={PersonIcon} label="About" />
        <NavItem href="/studies" icon={SchoolIcon} label="Studies" />
        <NavItem href="/projects" icon={DeveloperModeIcon} label="Projects" />
      </div>
    </div>
  );
}
