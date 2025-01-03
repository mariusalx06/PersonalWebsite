"use client";
import { useCallback } from "react";
import { motion } from "framer-motion";
import styles from "./SocialLink.module.css";

export default function SocialLink({ Icon, platform, link, ariaLabel }) {
  const handleClick = useCallback(() => {
    if (link) {
      platform === "Mail" || platform === "Phone"
        ? (window.location.href = link)
        : window.open(link, "_blank");
    }
  }, [platform, link]);

  return (
    <motion.button
      className={styles.bottomButton}
      onClick={handleClick}
      aria-label={ariaLabel}
      initial={{ rotate: 0 }}
      animate={{ rotate: 360 }}
      whileHover={{ rotate: 720 }}
      transition={{ duration: 0.5 }}
    >
      <Icon
        className={`${styles.bottomIcon} ${
          styles[`${platform.toLowerCase()}`]
        }`}
      />
    </motion.button>
  );
}
