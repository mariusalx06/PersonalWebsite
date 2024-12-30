import Image from "next/image";
import styles from "./PersonalDetails.module.css";

export default function PersonalDetails() {
  return (
    <div className={styles.container}>
      <Image
        src="/profile.jpg"
        alt="Marius Calin profile picture"
        width={150}
        height={150}
        className={styles.image}
      />
      <div className={styles.textarea}>
        <p>Hello! My name is</p>
        <h1>Marius Calin</h1>
        <p>
          I am a passionate{" "}
          <span className={styles.highlight}>Junior Web Developer</span> with a{" "}
          Bachelor's and Master's degree in Computer Science, specialized in{" "}
          <span className={styles.highlight}>Full Stack Web Development</span>.
          I am always looking to learn new techniques, refine my skills, and
          stay up-to-date with industry trends to continuously improve as a
          developer.
        </p>
      </div>
    </div>
  );
}
