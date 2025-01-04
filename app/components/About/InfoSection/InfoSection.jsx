import AnimatedOverlay from "../../General/AnimatedOverlay.jsx";
import styles from "./InfoSection.module.css";
export default function InfoSection() {
  return (
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
          , I have a strong foundation in software development, algorithms, and
          problem-solving, specializing in{" "}
          <span className={styles.highlight}>Full Stack Web Development</span>.
        </p>
        <AnimatedOverlay />
      </div>
    </section>
  );
}
