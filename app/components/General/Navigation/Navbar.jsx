"use client";
import { useContext } from "react";
import { PageContext } from "@/app/context/pageContext";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import SchoolIcon from "@mui/icons-material/School";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import { motion } from "framer-motion";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const { goToPage, currentPage, isMobileDevice } = useContext(PageContext);

  const handleClick = (pageIndex) => {
    goToPage(pageIndex);
  };

  const mobilePositions = [-9, 52, 115, 182, 251];
  const desktopPositions = [-6.5, 61, 132, 205, 281.5];

  const positions = isMobileDevice ? mobilePositions : desktopPositions;

  const activePosition = positions[currentPage];

  return (
    <nav className={styles.navigation}>
      <div className={styles.navButtons}>
        <motion.div
          className={styles.circle}
          animate={{
            x: activePosition,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
        <button
          onClick={() => handleClick(0)}
          className={currentPage === 0 ? styles.activeButton : ""}
        >
          <HomeIcon />
          Home
        </button>
        <button
          onClick={() => handleClick(1)}
          className={currentPage === 1 ? styles.activeButton : ""}
        >
          <PersonIcon />
          About
        </button>
        <button
          onClick={() => handleClick(2)}
          className={currentPage === 2 ? styles.activeButton : ""}
        >
          <SchoolIcon />
          Studies
        </button>
        <button
          onClick={() => handleClick(3)}
          className={currentPage === 3 ? styles.activeButton : ""}
        >
          <DeveloperModeIcon />
          Projects
        </button>
        <button
          onClick={() => handleClick(4)}
          className={currentPage === 4 ? styles.activeButton : ""}
        >
          <ContactMailIcon />
          Contact
        </button>
      </div>
    </nav>
  );
}
