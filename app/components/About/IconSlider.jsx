"use client";
import { useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SwipeIcon from "@mui/icons-material/Swipe";
import Link from "next/link";
import { isMobile } from "react-device-detect";
import styles from "./IconSlider.module.css";

const positions = ["center", "left1", "left", "right", "right1"];

const iconVariants = {
  center: { x: "0%", scale: 1, zIndex: 5 },
  left1: { x: "-45%", scale: 0.7, zIndex: 3 },
  left: { x: "-80%", scale: 0.5, zIndex: 2 },
  right: { x: "80%", scale: 0.5, zIndex: 1 },
  right1: { x: "45%", scale: 0.7, zIndex: 3 },
};

export default function IconSlider({ icons }) {
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);
  const [isMobileState, setIsMobileState] = useState(null);
  const [dragging, setDragging] = useState(false);
  const [offsetX, setOffsetX] = useState(0);
  const [thresholdCrossed, setThresholdCrossed] = useState(false);

  useEffect(() => {
    setIsMobileState(isMobile);
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
    setThresholdCrossed(false);
  }, []);

  const handleDrag = useCallback(
    (event, info) => {
      const threshold = 50; // Set threshold to 50px

      setOffsetX(info.offset.x); // Update the container's drag position

      if (Math.abs(info.offset.x) > threshold && !thresholdCrossed) {
        setThresholdCrossed(true);
        const direction = info.offset.x > 0 ? "backward" : "forward";
        updatePositionIndexes(direction);
        document.body.style.overflow = "auto";
      }
    },
    [updatePositionIndexes, thresholdCrossed]
  );

  const handleDragEnd = useCallback(() => {
    setDragging(false);
    setOffsetX(0);
    document.body.style.overflow = "auto";
  }, []);

  const handleNext = useCallback(() => {
    updatePositionIndexes("forward");
  }, [updatePositionIndexes]);

  const handleBack = useCallback(() => {
    updatePositionIndexes("backward");
  }, [updatePositionIndexes]);

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

  if (isMobileState === null) return null;

  return (
    <motion.div
      className={styles.container}
      style={{ x: `${offsetX}px`, transition: "none" }}
      drag="x"
      dragConstraints={{ left: -10, right: 10 }}
      onDragStart={handleDragStart}
      onDrag={handleDrag}
      onDragEnd={handleDragEnd}
    >
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
            style={{
              cursor: isCenter && isMobileState ? "grab" : "default",
            }}
          >
            <Link
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={
                positions[positionIndexes[index]] !== "center"
                  ? styles.disabledLink
                  : ""
              }
            >
              <item.Icon className={styles[item.platform.toLowerCase()]} />{" "}
            </Link>
          </motion.div>
        );
      })}

      {isMobileState && (
        <motion.div
          className={styles.swipeIconWrapper}
          animate={{
            x: ["-0%", "25%", "0%", "-25%", "0%"],
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

      {!isMobileState && (
        <div className={styles.buttons}>
          <button
            className={styles.iconButton}
            onClick={handleBack}
            aria-label="Go to previous icon"
          >
            <ArrowBackIosIcon style={{ fontSize: 32 }} />
          </button>
          <button
            className={styles.iconButton}
            onClick={handleNext}
            aria-label="Go to next icon"
          >
            <ArrowForwardIosIcon style={{ fontSize: 32 }} />
          </button>
        </div>
      )}
    </motion.div>
  );
}
