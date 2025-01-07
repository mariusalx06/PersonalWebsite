import InfoSection from "../../About/InfoSection/InfoSection";
import styles from "./WelcomeContainer.module.css";

export default function WelcomeContainer() {
  return (
    <section className={styles.welcomeContainer}>
      <header className={styles.header}>
        <h2>Here's who I am</h2>
      </header>
      <InfoSection />
    </section>
  );
}
