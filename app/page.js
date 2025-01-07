"use client";

import { useContext, useEffect, useState } from "react";
import { PageContext } from "./context/pageContext";

import styles from "./page.module.css";

import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";

import AboutContainer from "./components/Container/AboutContainer/AboutContainer";
import WelcomeContainer from "./components/Container/WelcomeContainer/WelcomeContainer";

export default function Home() {
  const { currentPage, isMobileDevice, goToNextPage, goToPreviousPage } =
    useContext(PageContext);

  return (
    <>
      {isMobileDevice ? (
        // On mobile, display all sections stacked
        <>
          <WelcomeContainer />
          <AboutContainer />

          <section className={styles.studiesContainer}>Studies Section</section>
          <section className={styles.projectsContainer}>
            Projects Section
          </section>
          <section className={styles.contactContainer}>Contact Section</section>
        </>
      ) : (
        // On desktop, show one section at a time and provide navigation buttons
        <>
          {currentPage === 0 && <WelcomeContainer />}
          {currentPage === 1 && <AboutContainer />}
          {currentPage === 2 && (
            <section className={styles.studiesContainer}>
              Studies Section
            </section>
          )}
          {currentPage === 3 && (
            <section className={styles.projectsContainer}>
              Projects Section
            </section>
          )}
          {currentPage === 4 && (
            <section className={styles.contactContainer}>
              Contact Section
            </section>
          )}

          <div className={styles.navigationButtons}>
            <button onClick={goToPreviousPage} className={styles.navButton}>
              <WestIcon />
            </button>
            <button onClick={goToNextPage} className={styles.navButton}>
              <EastIcon />
            </button>
          </div>
        </>
      )}
    </>
  );
}
