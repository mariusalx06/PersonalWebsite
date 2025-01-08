import HobbiesSection from "../../About/HobbiesSection/HobbiesSection";
import SkillSection from "../../About/SkillsSection/SkillsSection";
import SocialSection from "../../About/SocialSection/SocialSection";

import styles from "./AboutContainer.module.css";

export default function AboutContainer() {
  return (
    <div className={styles.aboutContainer}>
      <HobbiesSection />
      <SkillSection />
      <SocialSection />
    </div>
  );
}
