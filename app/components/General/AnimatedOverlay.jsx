"use client";
import { motion } from "framer-motion";
import styles from "./AnimatedOverlay.module.css";

export default function AnimatedOverlay() {
  return (
    <motion.div
      className={styles.overlay}
      initial={{
        opacity: 1,
      }}
      whileInView={{
        opacity: 0,
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
      }}
      viewport={{}}
    />
  );
}
