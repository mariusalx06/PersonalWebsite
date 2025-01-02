"use client";
import { motion, useScroll, useSpring } from "framer-motion";
import styles from "./ScrollProgressBar.module.css";

const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className={styles.progressBar}
      style={{
        scaleX: scaleX,
        width: "100%", // Ensure it fills 100% width on mobile
      }}
    />
  );
};

export default ScrollProgressBar;
