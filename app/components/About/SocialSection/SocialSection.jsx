import IconSlider from "./IconSlider";
import styles from "./SocialSection.module.css";
import socialIconsData from "@/data/socialIconsData";

export default function SocialSection() {
  return (
    <section className={styles.social}>
      <header>
        <h3>Social Media</h3>
      </header>
      <IconSlider icons={socialIconsData} />
    </section>
  );
}
