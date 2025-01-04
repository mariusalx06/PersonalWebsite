import styles from "./SkillsSection.module.css";
import Link from "next/link";
import SkillCard from "./SkillCard";
import skills from "@/data/skillsData";

export default function SkillSection() {
  return (
    <section className={styles.skills}>
      <header>
        <h2>My Top Skills</h2>
      </header>
      <ul>
        {skills.map((skill, index) => (
          <SkillCard
            key={index}
            src={skill.src}
            alt={skill.alt}
            skill={skill.skill}
          />
        ))}
      </ul>
      <p>
        Icons by{" "}
        <Link
          href="https://icons8.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Icons8
        </Link>
      </p>
    </section>
  );
}
