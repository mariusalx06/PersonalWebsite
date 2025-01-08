"use client";
import { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";
import styles from "./GradientBackground.module.css";

export default function GradientBackground() {
  const [isMobileDevice, setIsMobileDevice] = useState(false);

  useEffect(() => {
    if (isMobile) {
      setIsMobileDevice(true);
    }
  }, []);

  if (isMobileDevice) {
    return null;
  }

  return (
    <div className={styles.gradientBg}>
      <svg xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <div className={styles.gradientContainer}>
        <div className={styles.g1}></div>
        <div className={styles.g2}></div>
        <div className={styles.g3}></div>
        <div className={styles.g4}></div>
      </div>
    </div>
  );
}
