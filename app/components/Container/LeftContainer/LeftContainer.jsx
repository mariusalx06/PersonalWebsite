import Image from "next/image";
import styles from "./LeftContainer.module.css";
import SocialLink from "./SocialLink";
import socialIconsData from "@/data/socialIconsData";
import RadialOverlay from "./RadialOverlay";
import DescriptionContaier from "./DescriptionContainer";
import PageContextProvider from "@/app/context/pageContext";

export default function LeftContainer() {
  return (
    <div id="leftContainer" className={styles.leftContainer}>
      <header className={styles.topSide}>
        <RadialOverlay />
        <Image
          src="/profile.jpg"
          alt="Marius Calin"
          width={150}
          height={150}
          className={styles.profileImage}
          priority
        />
        <h1 className={styles.name}>Marius Calin</h1>
      </header>

      <DescriptionContaier />

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
