"use client";

import { useContext, useState, useCallback } from "react";
import { PageContext } from "./context/pageContext";
import { motion, AnimatePresence } from "framer-motion";

import styles from "./page.module.css";

import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";

import AboutContainer from "./components/Container/AboutContainer/AboutContainer";
import WelcomeContainer from "./components/Container/WelcomeContainer/WelcomeContainer";
import ContactContainer from "./components/Container/ContactContainer/ContactContaier";
import ProjectsContainer from "./components/Container/ProjectsContainer/ProjectsContainer";
import StudiesContainer from "./components/Container/StudiesContainer/StudiesContainer";

const slideInVariants = {
  enter: {
    x: "100%",
    opacity: 0,
    transition: { duration: 0.5 },
  },
  exit: {
    x: "-100%",
    opacity: 0,
    transition: { duration: 0.5 },
  },
  display: {
    x: 0,
    opacity: 1,
    transition: { duration: 1 },
  },
};

export default function Home() {
  const { currentPage, isMobileDevice, goToNextPage, goToPreviousPage } =
    useContext(PageContext);

  const [animationDirection, setAnimationDirection] = useState("display");

  const handleNextPage = useCallback(() => {
    setAnimationDirection("enter");
    goToNextPage();
  }, [goToNextPage]);

  const handlePreviousPage = useCallback(() => {
    setAnimationDirection("exit");
    goToPreviousPage();
  }, [goToPreviousPage]);

  return (
    <>
      {isMobileDevice ? (
        <>
          <WelcomeContainer />
          <AboutContainer />
          <StudiesContainer />
          <ProjectsContainer />
          <ContactContainer />
        </>
      ) : (
        <>
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              className={styles.pageContainer}
              key={currentPage}
              initial={animationDirection === "enter" ? "enter" : "exit"}
              animate="display"
              exit="exit"
              variants={slideInVariants}
            >
              {currentPage === 0 && <WelcomeContainer />}
              {currentPage === 1 && <AboutContainer />}
              {currentPage === 2 && <StudiesContainer />}
              {currentPage === 3 && <ProjectsContainer />}
              {currentPage === 4 && <ContactContainer />}
            </motion.div>
          </AnimatePresence>

          <div className={styles.navigationButtons}>
            <button onClick={handlePreviousPage} className={styles.navButton}>
              <WestIcon />
            </button>
            <button onClick={handleNextPage} className={styles.navButton}>
              <EastIcon />
            </button>
          </div>
        </>
      )}
    </>
  );
}
