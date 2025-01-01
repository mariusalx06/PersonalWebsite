// SkillCard.js
import Image from "next/image";
import styles from "./SkillCard.module.css";

export default function SkillCard({ src, alt, skill }) {
  return (
    <li className={styles.skillItem}>
      <div className={styles.skillContent}>
        <Image src={src} alt={alt} width={50} height={50} />
        <p>{skill}</p>
      </div>
    </li>
  );
}
