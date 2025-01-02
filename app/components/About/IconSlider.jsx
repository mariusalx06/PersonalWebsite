"use client";
import { useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion"; // Import motion for animations
import {
  WhatsApp,
  Email as EmailIcon,
  Instagram,
  LinkedIn,
  GitHub,
} from "@mui/icons-material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SwipeIcon from "@mui/icons-material/Swipe"; // Import SwipeIcon
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
  const [dragging, setDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const isMobileDevice = /android|iphone|ipod|ipad|mobile/.test(userAgent);
      setIsMobile(isMobileDevice);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  const updatePositionIndexes = useCallback(
    (direction) => {
      setPositionIndexes((prevIndexes) =>
        prevIndexes.map((prevIndex) => {
          if (direction === "forward") {
            return (prevIndex + 1) % icons.length;
          } else if (direction === "backward") {
            return (prevIndex + icons.length - 1) % icons.length;
          }
          return prevIndex;
        })
      );
    },
    [icons.length]
  );

  const handleDragStart = useCallback(() => {
    setDragging(true);
    document.body.style.overflow = "hidden";
  }, []);

  const handleDrag = useCallback((event, info) => {
    setDragOffset(info.offset.x);
  }, []);

  const handleDragEnd = useCallback(() => {
    const threshold = 10;

    if (Math.abs(dragOffset) > threshold) {
      const direction = dragOffset > 0 ? "backward" : "forward";
      updatePositionIndexes(direction);
    }

    setDragging(false);
    setDragOffset(0);
    document.body.style.overflow = "auto";
  }, [dragOffset]);

  const handleNext = useCallback(() => {
    updatePositionIndexes("forward");
  }, []);

  const handleBack = useCallback(() => {
    updatePositionIndexes("backward");
  }, []);

  useEffect(() => {
    const preventScroll = (e) => {
      if (dragging) {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    document.body.addEventListener("touchmove", preventScroll, {
      passive: false,
    });

    return () => {
      document.body.removeEventListener("touchmove", preventScroll);
    };
  }, [dragging]);

  return (
    <div className={styles.container}>
      {icons.map((item, index) => {
        const isCenter = positions[positionIndexes[index]] === "center";

        return (
          <motion.div
            key={index}
            className={styles.icon}
            initial="center"
            animate={positions[positionIndexes[index]]}
            variants={iconVariants}
            transition={{ duration: 0.5 }}
            drag={isCenter && isMobile ? "x" : false}
            dragConstraints={{ left: -10, right: 10 }}
            onDragStart={handleDragStart}
            onDrag={handleDrag}
            onDragEnd={handleDragEnd}
            style={{
              cursor: dragging && isCenter && isMobile ? "grabbing" : "grab",
            }}
          >
            <Link
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={
                dragging || positions[positionIndexes[index]] !== "center"
                  ? styles.disabledLink
                  : ""
              }
            >
              {item.icon}
            </Link>
          </motion.div>
        );
      })}

      {isMobile && (
        <motion.div
          className={styles.swipeIconWrapper}
          animate={{
            x: ["0%", "10%", "0%", "-10%", "0%"],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        >
          <SwipeIcon className={styles.swipeIcon} />
        </motion.div>
      )}

      {!isMobile && (
        <div className={styles.buttons}>
          <button className={styles.iconButton} onClick={handleBack}>
            <ArrowBackIosIcon style={{ fontSize: 32 }} />
          </button>
          <button className={styles.iconButton} onClick={handleNext}>
            <ArrowForwardIosIcon style={{ fontSize: 32 }} />
          </button>
        </div>
      )}
    </div>
  );
}
