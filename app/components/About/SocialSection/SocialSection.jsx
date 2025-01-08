import IconSlider from "./IconSlider";
import styles from "./SocialSection.module.css";
import socialIconsData from "@/data/socialIconsData";

export default function SocialSection() {
  return (
    <section className={styles.social}>
      <header>
        <h2>Social Media</h2>
      </header>
      <IconSlider icons={socialIconsData} />
    </section>
  );
}
