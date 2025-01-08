"use client";
import { useContext, useRef } from "react";
import { PageContext } from "@/app/context/pageContext";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import SchoolIcon from "@mui/icons-material/School";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const { goToPage, currentPage, isMobileDevice } = useContext(PageContext);

  if (isMobileDevice) {
    return null;
  }

  const handleClick = (pageIndex) => {
    goToPage(pageIndex);
  };

  return (
    <nav className={styles.navigation}>
      <div className={styles.navButtons}>
        <button
          onClick={() => handleClick(0)}
          className={currentPage === 0 ? styles.activeButton : ""}
        >
          <div
            className={`${styles.iconWrapper} ${
              currentPage === 0 ? styles.iconActive : ""
            }`}
          >
            <HomeIcon />
          </div>
        </button>

        <button
          onClick={() => handleClick(1)}
          className={currentPage === 1 ? styles.activeButton : ""}
        >
          <div
            className={`${styles.iconWrapper} ${
              currentPage === 1 ? styles.iconActive : ""
            }`}
          >
            <PersonIcon />
          </div>
        </button>

        <button
          onClick={() => handleClick(2)}
          className={currentPage === 2 ? styles.activeButton : ""}
        >
          <div
            className={`${styles.iconWrapper} ${
              currentPage === 2 ? styles.iconActive : ""
            }`}
          >
            <SchoolIcon />
          </div>
        </button>

        <button
          onClick={() => handleClick(3)}
          className={currentPage === 3 ? styles.activeButton : ""}
        >
          <div
            className={`${styles.iconWrapper} ${
              currentPage === 3 ? styles.iconActive : ""
            }`}
          >
            <DeveloperModeIcon />
          </div>
        </button>

        <button
          onClick={() => handleClick(4)}
          className={currentPage === 4 ? styles.activeButton : ""}
        >
          <div
            className={`${styles.iconWrapper} ${
              currentPage === 4 ? styles.iconActive : ""
            }`}
          >
            <ContactMailIcon />
          </div>
        </button>
      </div>
    </nav>
  );
}
