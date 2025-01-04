import SkillImage from "./SkillImage";
import styles from "./SkillCard.module.css";

export default function SkillCard({ src, alt, skill }) {
  const randomDuration = Math.random() * (2.5 - 1) + 1;

  return (
    <li className={styles.skillItem}>
      <div className={styles.skillContent}>
        <SkillImage src={src} alt={alt} randomDuration={randomDuration} />
        <p>{skill}</p>
      </div>
    </li>
  );
}
