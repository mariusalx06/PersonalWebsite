import Image from "next/image";
import styles from "./page.module.css";

import MovieFilterIcon from "@mui/icons-material/MovieFilter";
import DownhillSkiingIcon from "@mui/icons-material/DownhillSkiing";
import ForestIcon from "@mui/icons-material/Forest";

import Link from "next/link";
import SkillCard from "./components/About/SkillCard";
import IconSlider from "./components/About/IconSlider";
import ScrollProgressBar from "./components/ScrollProgressBar";

const skills = [
  {
    src: "https://img.icons8.com/fluency/48/javascript.png",
    alt: "JavaScript",
    skill: "JavaScript",
  },
  {
    src: "https://img.icons8.com/fluency/48/node-js.png",
    alt: "Node.js",
    skill: "Node.js",
  },
  {
    src: "https://img.icons8.com/color/48/react-native.png",
    alt: "React",
    skill: "React",
  },
  {
    src: "https://img.icons8.com/color/48/redux.png",
    alt: "Redux",
    skill: "Redux",
  },
  {
    src: "https://img.icons8.com/color/48/html-5--v1.png",
    alt: "HTML",
    skill: "HTML",
  },
  {
    src: "https://img.icons8.com/color/48/css3.png",
    alt: "CSS",
    skill: "CSS",
  },
  {
    src: "https://img.icons8.com/dusk/64/curly-brackets.png",
    alt: "Curly Brackets",
    skill: "RESTful APIs",
  },
];

export default function Home() {
  return (
    <div className={styles.container}>
      <ScrollProgressBar />
      <div className={styles.info}>
        <h2>About me</h2>
        <div className={styles.about}>
          <p>
            I am a junior full-stack web developer with a passion for building
            dynamic and responsive web applications. With a{" "}
            <span className={styles.highlight}>
              Bachelor&apos;s and Master&apos;s degree in Computer Science
            </span>
            , I have a strong foundation in software development, algorithms,
            and problem-solving, specializing in{" "}
            <span className={styles.highlight}>Full Stack Web Development</span>
            .
          </p>
        </div>
      </div>
      <div className={styles.skills}>
        <h2>My Top Skills</h2>
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
      </div>
      <div className={styles.hobbies}>
        <h2>Favorite Hobbies</h2>

        <div className={styles.hobby}>
          <DownhillSkiingIcon className={styles.skiIcon} />
          <div>
            <p className={styles.skiTitle}>Skiing</p>
            <small>
              A new sport I recently discovered and absolutely love for its
              thrill and adventure.
            </small>
          </div>
        </div>
        <div className={styles.hobby}>
          <ForestIcon className={styles.natureIcon} />
          <div>
            <p className={styles.natureTitle}>Exploring Nature</p>
            <small>
              Finding peace and relaxation by immersing myself in natures calm
              beauty.
            </small>
          </div>
        </div>
      </div>
      <div className={styles.social}>
        <h2>Social</h2>
        <IconSlider />
      </div>
    </div>
  );
}
