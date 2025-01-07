import styles from "./InfoSection.module.css";
export default function InfoSection() {
  return (
    <section className={styles.info}>
      <div className={styles.about}>
        <p>
          Holding both a{" "}
          <span className={styles.highlight}>
            Bachelor&apos;s and Master&apos;s degree in Computer Science
          </span>
          , I possess a solid foundation in software development, algorithms,
          and problem-solving, with a specialization in{" "}
          <span className={styles.highlight}>Full Stack Web Development</span>.
        </p>
      </div>
    </section>
  );
}
