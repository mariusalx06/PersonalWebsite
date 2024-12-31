import Image from "next/image";
import styles from "./LeftContainer.module.css";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import SocialLink from "./SocialLink";

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
          priority
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
      </div>

      <div className={styles.bottomSide}>
        <SocialLink
          Icon={LinkedInIcon}
          onClick={() => handleClick("LinkedIn")}
          ariaLabel="LinkedIn"
        />
        <SocialLink
          Icon={WhatsAppIcon}
          onClick={() => handleClick("WhatsApp")}
          ariaLabel="WhatsApp"
        />
        <SocialLink
          Icon={MailIcon}
          onClick={() => handleClick("Mail")}
          ariaLabel="Mail"
        />
        <SocialLink
          Icon={PhoneIcon}
          onClick={() => handleClick("Phone")}
          ariaLabel="Phone"
        />
      </div>
    </div>
  );
}
