"use client";
import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import {
  WhatsApp,
  Email as EmailIcon,
  Instagram,
  LinkedIn,
  GitHub,
} from "@mui/icons-material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Link from "next/link";
import styles from "./IconSlider.module.css";

const icons = [
  {
    icon: <GitHub className={styles.github} />,
    link: "https://github.com/mariusalx06",
  },
  {
    icon: <LinkedIn className={styles.linkedin} />,
    link: "https://www.linkedin.com/in/marius-calin-473933204/",
  },
  {
    icon: <Instagram className={styles.instagram} />,
    link: "https://www.instagram.com/marius.alex06/",
  },
  {
    icon: <EmailIcon className={styles.email} />,
    link: "mailto:marius.calin0699@gmail.com",
  },
  {
    icon: <WhatsApp className={styles.whatsapp} />,
    link: "https://wa.me/40727727722?text=Hello%20Marius,%20I%20liked%20your%20website%20and%20I%20would%20like%20to%20get%20in%20touch!",
  },
];

const positions = ["center", "left1", "left", "right", "right1"];

const iconVariants = {
  center: { x: "0%", scale: 1, zIndex: 5 },
  left1: { x: "-45%", scale: 0.7, zIndex: 3 },
  left: { x: "-80%", scale: 0.5, zIndex: 2 },
  right: { x: "80%", scale: 0.5, zIndex: 1 },
  right1: { x: "45%", scale: 0.7, zIndex: 3 },
};

export default function IconSlider() {
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);

  const handleNext = useCallback(() => {
    setPositionIndexes((prevIndexes) =>
      prevIndexes.map((prevIndex) => (prevIndex + 1) % icons.length)
    );
  }, []);

  const handleBack = useCallback(() => {
    setPositionIndexes((prevIndexes) =>
      prevIndexes.map(
        (prevIndex) => (prevIndex + icons.length - 1) % icons.length
      )
    );
  }, []);

  return (
    <div className={styles.container}>
      {icons.map((item, index) => (
        <motion.div
          key={index}
          className={styles.icon}
          initial="center"
          animate={positions[positionIndexes[index]]}
          variants={iconVariants}
          transition={{ duration: 0.5 }}
        >
          <Link
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            // Only allow clicking on the center icon
            className={
              positions[positionIndexes[index]] === "center"
                ? ""
                : styles.disabledLink
            }
          >
            {item.icon}
          </Link>
        </motion.div>
      ))}
      <div className={styles.buttons}>
        <button className={styles.iconButton} onClick={handleBack}>
          <ArrowBackIosIcon style={{ fontSize: 32 }} />
        </button>
        <button className={styles.iconButton} onClick={handleNext}>
          <ArrowForwardIosIcon style={{ fontSize: 32 }} />
        </button>
      </div>
    </div>
  );
}
