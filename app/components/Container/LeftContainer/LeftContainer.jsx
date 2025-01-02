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
    <div id="leftContainer" className={styles.leftContainer}>
      <div className={styles.topSide}>
        <Image
          src="/profile.jpg"
          alt="Marius Calin"
          width={150}
          height={150}
          className={styles.profileImage}
          priority
        />
        <h2 className={styles.name}>Marius Calin</h2>
        <p>Welcome to my Portfolio website!</p>
      </div>
      <div className={styles.descriptionContainer}>
        <p>&lt;Junior&gt;</p>
        <p className={styles.description}>Full Stack Developer</p>
      </div>

      <div className={styles.buttonContainer}>
        <SocialLink
          Icon={CloudDownloadIcon}
          platform="Resume"
          ariaLabel="Download Resume"
        >
          Resume
        </SocialLink>
      </div>

      <div className={styles.bottomSide}>
        <SocialLink
          Icon={LinkedInIcon}
          platform="LinkedIn"
          ariaLabel="LinkedIn"
        >
          LinkedIn
        </SocialLink>
        <SocialLink
          Icon={WhatsAppIcon}
          platform="WhatsApp"
          ariaLabel="WhatsApp"
        >
          WhatsApp
        </SocialLink>
        <SocialLink Icon={MailIcon} platform="Mail" ariaLabel="Mail">
          Email
        </SocialLink>
        <SocialLink Icon={PhoneIcon} platform="Phone" ariaLabel="Phone">
          Phone
        </SocialLink>
      </div>
    </div>
  );
}
