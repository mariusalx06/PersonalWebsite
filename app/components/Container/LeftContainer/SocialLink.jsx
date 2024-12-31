"use client";
import { useCallback } from "react";
import styles from "./SocialLink.module.css";

// Platform URLs for social links
const platformUrls = {
  LinkedIn: "https://www.linkedin.com/in/marius-calin-473933204/",
  WhatsApp:
    "https://wa.me/40727727722?text=Hello%20Marius,%20I%20liked%20your%20website%20and%20I%20would%20like%20to%20get%20in%20touch!",
  Mail: "mailto:marius.calin0699@gmail.com",
  Phone: "tel:+40727727722",
};

export default function SocialLink({ Icon, platform, ariaLabel, children }) {
  const handleClick = useCallback(() => {
    if (platform === "Resume") {
      const isMobile = /Mobi|Android/i.test(navigator.userAgent);

      if (isMobile) {
        window.open("/resume.pdf", "_blank");
      } else {
        const link = document.createElement("a");
        link.href = "/resume.pdf";
        link.download = "Marius_Calin_Resume.pdf";
        link.click();
      }
    } else {
      const url = platformUrls[platform];

      if (url) {
        platform === "Mail" || platform === "Phone"
          ? (window.location.href = url)
          : window.open(url, "_blank");
      }
    }
  }, [platform]);

  const buttonStyle =
    platform === "Resume" ? styles.resumeButton : styles.bottomButton;

  const iconStyle =
    platform === "Resume" ? styles.whiteIcon : styles.bottomIcon;

  return (
    <button
      className={buttonStyle}
      onClick={handleClick}
      aria-label={ariaLabel}
    >
      <Icon className={iconStyle} />
      {platform === "Resume" && children}{" "}
    </button>
  );
}
