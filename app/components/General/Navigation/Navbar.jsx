import NavItem from "./NavItem";
import styles from "./Navbar.module.css";

import PersonIcon from "@mui/icons-material/Person";
import SchoolIcon from "@mui/icons-material/School";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const navItems = [
  { href: "/", icon: PersonIcon },
  { href: "/studies", icon: SchoolIcon },
  { href: "/projects", icon: DeveloperModeIcon },
  { href: "/contact", icon: ContactMailIcon },
  { href: "#top", icon: ArrowUpwardIcon },
];

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        {navItems.map(({ href, icon, text }) => (
          <NavItem key={href} href={href} icon={icon} />
        ))}
      </ul>
    </nav>
  );
}
