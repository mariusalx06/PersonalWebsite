import Image from "next/image";
import styles from "./LeftContainer.module.css";
import SocialLink from "./SocialLink";
import socialIconsData from "@/data/socialIconsData";

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
        <h1 className={styles.name}>Marius Calin</h1>
        <p>Welcome to my Portfolio website!</p>
      </div>
      <div className={styles.descriptionContainer}>
        <p>&lt;Junior&gt;</p>
        <p className={styles.description}>Full Stack Developer</p>
      </div>

      <div className={styles.bottomSide}>
        {socialIconsData.map(({ Icon, platform, link, ariaLabel }) => (
          <SocialLink
            key={platform}
            Icon={Icon}
            platform={platform}
            link={link}
            ariaLabel={ariaLabel}
          ></SocialLink>
        ))}
      </div>
    </div>
  );
}
