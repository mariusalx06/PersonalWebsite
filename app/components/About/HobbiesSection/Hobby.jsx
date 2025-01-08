"use client";
import { motion } from "framer-motion";
import styles from "./Hobby.module.css";

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

export default function Hobby({
  direction,
  Icon,
  title,
  description,
  iconColor,
  titleColor,
}) {
  return (
    <motion.div
      className={styles.hobby}
      initial="hidden"
      whileInView="visible"
      variants={slideVariants[direction]}
      viewport={{}}
      transition={{ type: "spring", stiffness: 50, damping: 25 }}
    >
      <Icon className={styles.icon} style={{ color: iconColor }} />
      <div>
        <header>
          <h4 className={styles.title} style={{ color: titleColor }}>
            {title}
          </h4>
        </header>
        <small className={styles.small}>{description}</small>
      </div>
    </motion.div>
  );
}
