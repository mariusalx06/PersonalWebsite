import NavItem from "./NavItem";
import styles from "./Navbar.module.css";

import PersonIcon from "@mui/icons-material/Person";
import SchoolIcon from "@mui/icons-material/School";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import ContactMailIcon from "@mui/icons-material/ContactMail";

export default function Navbar() {
  const navItems = [
    { href: "/", icon: PersonIcon },
    { href: "/studies", icon: SchoolIcon },
    { href: "/projects", icon: DeveloperModeIcon },
    { href: "/contact", icon: ContactMailIcon },
  ];

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        {navItems.map(({ href, icon, text, isExternal }) => (
          <NavItem key={href} href={href} icon={icon} isExternal={isExternal} />
        ))}
      </ul>
    </nav>
  );
}
