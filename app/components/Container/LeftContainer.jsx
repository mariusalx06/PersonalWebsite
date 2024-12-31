import Image from "next/image";
import styles from "./LeftContainer.module.css";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";

export default function LeftContainer() {
  return (
    <div className={styles.leftContainer}>
      <div className={styles.topSide}>
        <Image
          src="/profile.jpg"
          alt="Marius Calin"
          width={150}
          height={150}
          className={styles.profileImage}
        />
        <h1 className={styles.name}>Marius Calin</h1>
        <div className={styles.descriptionContainer}>
          <p>&lt;Junior&gt;</p>
          <p className={styles.description}>Full Stack Developer</p>
        </div>
      </div>

      <div className={styles.buttonContainer}>
        <button className={styles.button}>
          <CloudDownloadIcon className={styles.buttonIcon} />
          Resume
        </button>
        <button className={styles.button}>Hire Me</button>
      </div>

      <div className={styles.bottomSide}>
        <button className={styles.bottomButton}>
          <LinkedInIcon className={styles.bottomIcon} />
        </button>
        <button className={styles.bottomButton}>
          <WhatsAppIcon className={styles.bottomIcon} />
        </button>
        <button className={styles.bottomButton}>
          <MailIcon className={styles.bottomIcon} />
        </button>
        <button className={styles.bottomButton}>
          <PhoneIcon className={styles.bottomIcon} />
        </button>
      </div>
    </div>
  );
}
