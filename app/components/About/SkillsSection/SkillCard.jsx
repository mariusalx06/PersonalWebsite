import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./SkillCard.module.css";

export default function SkillCard({ src, alt, skill }) {
  const randomDuration = Math.random() * (2.5 - 1) + 1;

  return (
    <li className={styles.skillItem}>
      <motion.div
        className={styles.skillContent}
        initial={{ opacity: 0, scale: 0.6 }}
        whileInView={{
          opacity: 1,
          scale: 1,
          transition: {
            duration: 1.5,
            ease: "easeOut",
          },
        }}
      >
        <motion.div
          className={styles.imageContainer}
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            transition: {
              duration: randomDuration,
              ease: "easeInOut",
            },
          }}
          animate={{
            scale: 1,
            transition: { duration: randomDuration, ease: "easeOut" },
          }}
        >
          <Image src={src} alt={alt} width={32} height={32} />
        </motion.div>
        <p>{skill}</p>
      </motion.div>
    </li>
  );
}
