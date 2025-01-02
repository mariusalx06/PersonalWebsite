import SkillImage from "./SkillImage";
import styles from "./SkillCard.module.css";

export default function SkillCard({ src, alt, skill }) {
  return (
    <li className={styles.skillItem}>
      <div className={styles.skillContent}>
        <SkillImage src={src} alt={alt} />
        <p>{skill}</p>
      </div>
    </li>
  );
}
