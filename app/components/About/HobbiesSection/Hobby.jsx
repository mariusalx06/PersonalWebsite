"use client";
import { motion } from "framer-motion";
import styles from "./Hobby.module.css";

export default function Hobby({
  direction,
  Icon,
  title,
  description,
  iconColor,
  titleColor,
}) {
  // Animation variants for sliding
  const slideVariants = {
    leftToRight: {
      hidden: { x: -100, opacity: 0 },
      visible: { x: 0, opacity: 1 },
    },
    rightToLeft: {
      hidden: { x: 100, opacity: 0 },
      visible: { x: 0, opacity: 1 },
    },
  };

  return (
    <motion.div
      className={styles.hobby}
      initial="hidden"
      whileInView="visible"
      variants={slideVariants[direction]}
      viewport={{}}
      transition={{ type: "spring", stiffness: 100, damping: 25 }}
    >
      <Icon className={styles.icon} style={{ color: iconColor }} />
      <div>
        <p className={styles.title} style={{ color: titleColor }}>
          {title}
        </p>
        <small>{description}</small>
      </div>
    </motion.div>
  );
}
