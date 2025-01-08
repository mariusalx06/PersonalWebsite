import styles from "./StudiesContainer.module.css";

export default function StudiesContainer() {
  return (
    <section className={styles.studiesContainer}>
      <header>
        <h2>Studies</h2>
      </header>
      <div className={styles.timeline}>
        <div className={styles.timelineItemLeft}>
          <div className={styles.content}>
            <h3>Web Development Bootcamp</h3>
            <p>
              Experience 1 Experience 1 Experience 1 Experience 1 Experience 1
            </p>
            <div className={styles.leftDot} />
          </div>
          <div className={styles.year}>2021-2022</div>
        </div>
        <div className={styles.timelineLine}></div>
        <div className={styles.timelineItemRight}>
          <div className={styles.content}>
            <h3>Experience 2</h3>
            <p>Experience 2</p>
            <div className={styles.rightDot} />
          </div>
          <div className={styles.year}>2022-2023</div>
        </div>
        <div className={styles.timelineLine}></div>
        <div className={styles.timelineItemLeft}>
          <div className={styles.content}>
            <h3>Experience 3</h3>
            <p>Experience 3</p>
            <div className={styles.leftDot} />
          </div>
          <div className={styles.year}>2023-2024</div>
        </div>
        <div className={styles.timelineLine}></div>
        <div className={styles.timelineItemRight}>
          <div className={styles.content}>
            <h3>Experience 4</h3>
            <p>Experience 4</p>
            <div className={styles.rightDot} />
          </div>
          <div className={styles.year}>2022-2023</div>
        </div>
        <div className={styles.timelineLine}></div>
        <div className={styles.timelineItemLeft}>
          <div className={styles.content}>
            <h3>Experience 5</h3>
            <p>Experience 5</p>
            <div className={styles.leftDot} />
          </div>
          <div className={styles.year}>2021-2022</div>
        </div>
        <div className={styles.timelineLine}></div>
      </div>
    </section>
  );
}
