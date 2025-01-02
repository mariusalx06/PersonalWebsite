"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { isMobile } from "react-device-detect";
import styles from "./SkillCard.module.css";

export default function SkillCard({ src, alt, skill }) {
  const delay = isMobile ? 0.5 : 0;

  return (
    <motion.li
      className={styles.skillItem}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{
        opacity: 1,
        y: [50, -10, 0],
      }}
      transition={{
        duration: 1,
        ease: "easeOut",
        delay,
      }}
      viewport={{}}
    >
      <motion.div
        className={styles.skillContent}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <Image src={src} alt={alt} width={50} height={50} />
        <p>{skill}</p>
      </motion.div>
    </motion.li>
  );
}
