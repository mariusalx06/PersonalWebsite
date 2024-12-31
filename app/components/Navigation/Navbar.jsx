import NavItem from "./NavItem";
import styles from "./Navbar.module.css";

import PersonIcon from "@mui/icons-material/Person";
import SchoolIcon from "@mui/icons-material/School";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import ContactMailIcon from "@mui/icons-material/ContactMail";

export default function Navbar() {
  const navItems = [
    { href: "/", icon: PersonIcon, text: "About" },
    { href: "/studies", icon: SchoolIcon, text: "Studies" },
    { href: "/projects", icon: DeveloperModeIcon, text: "Projects" },
    { href: "/contact", icon: ContactMailIcon, text: "Contact" },
  ];

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        {navItems.map(({ href, icon, text, isExternal }) => (
          <NavItem
            key={href}
            href={href}
            icon={icon}
            text={text}
            isExternal={isExternal}
          />
        ))}
      </ul>
    </nav>
  );
}
