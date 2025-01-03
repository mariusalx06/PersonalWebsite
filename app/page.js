import styles from "./page.module.css";

import DownhillSkiingIcon from "@mui/icons-material/DownhillSkiing";
import ForestIcon from "@mui/icons-material/Forest";

import Link from "next/link";
import SkillCard from "./components/About/SkillCard";
import IconSlider from "./components/About/IconSlider";
import ScrollProgressBar from "./components/General/ScrollProgressBar";

import skills from "../data/skillsData.js";
import socialIconsData from "@/data/socialIconsData";
import Overlay from "./components/General/AnimatedOverlay";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <ScrollProgressBar />

        {/* About Section */}
        <section className={styles.info}>
          <header>
            <h2>About Me</h2>
          </header>
          <div className={styles.about}>
            <p>
              I am a junior full-stack web developer with a passion for building
              dynamic and responsive web applications. With a{" "}
              <span className={styles.highlight}>
                Bachelor&apos;s and Master&apos;s degree in Computer Science
              </span>
              , I have a strong foundation in software development, algorithms,
              and problem-solving, specializing in{" "}
              <span className={styles.highlight}>
                Full Stack Web Development
              </span>
              .
            </p>
            <Overlay />
          </div>
        </section>

        {/* Skills Section */}

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

        {/* Hobbies Section */}
        <section className={styles.hobbies}>
          <header className={styles.hobbiesHeader}>
            <h2>Favorite Hobbies</h2>
          </header>

          <div className={styles.hobby}>
            <DownhillSkiingIcon className={styles.skiIcon} />
            <div>
              <p className={styles.skiTitle}>Skiing</p>
              <small>
                A new sport I recently discovered and absolutely love for its
                thrill and adventure.
              </small>
            </div>
            <Overlay />
          </div>

          <div className={styles.hobby}>
            <ForestIcon className={styles.natureIcon} />
            <div>
              <p className={styles.natureTitle}>Exploring Nature</p>
              <small>
                Finding peace and relaxation by immersing myself in
                nature&apos;s calm beauty.
              </small>
            </div>
            <Overlay />
          </div>
        </section>

        {/* Social Section */}
        <section className={styles.social}>
          <header>
            <h2>Social</h2>
          </header>
          <IconSlider icons={socialIconsData} />
        </section>
      </div>
    </>
  );
}
