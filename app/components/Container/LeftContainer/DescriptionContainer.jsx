import styles from "./DescriptionContainer.module.css";

export default function DescriptionContainer() {
  return (
    <div className={styles.descriptionContainer}>
      <header>
        <p>Hello!</p>
        <h2>This is my Portfolio</h2>
      </header>
      <small>
        I am a junior full stack web developer with a passion for building
        dynamic and responsive web applications.
      </small>
    </div>
  );
}
