import HobbiesSection from "../../About/HobbiesSection/HobbiesSection";
import InfoSection from "../../About/InfoSection/InfoSection";
import SkillSection from "../../About/SkillsSection/SkillsSection";
import SocialSection from "../../About/SocialSection/SocialSection";

import styles from "./AboutContainer.module.css";

export default function AboutContainer() {
  return (
    <div className={styles.aboutContainer}>
      <header className={styles.header}>
        <h2>About Me</h2>
      </header>

      <SkillSection />
      <HobbiesSection />
      <SocialSection />
    </div>
  );
}
