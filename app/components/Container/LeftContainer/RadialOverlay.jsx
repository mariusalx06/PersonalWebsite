"use client";
import { motion } from "framer-motion";
import styles from "./RadialOverlay.module.css";

export default function RadialOverlay() {
  return (
    <motion.div
      className={styles.overlay}
      initial={{ y: "-100%" }}
      whileInView={{ y: "0%" }}
      transition={{ duration: 2 }}
      viewport={{ once: true }}
    />
  );
}
