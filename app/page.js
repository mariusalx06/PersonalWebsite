import styles from "./page.module.css";

import InfoSection from "./components/About/InfoSection/InfoSection.jsx";
import SkillSection from "./components/About/SkillsSection/SkillsSection.jsx";
import SocialSection from "./components/About/SocialSection/SocialSection.jsx";

import HobbiesSection from "./components/About/HobbiesSection/HobbiesSection";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <InfoSection />
        <SkillSection />
        <HobbiesSection />
        <SocialSection />
      </div>
    </>
  );
}
