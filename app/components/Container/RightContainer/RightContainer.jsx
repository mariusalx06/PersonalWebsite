import styles from "./RightContainer.module.css";
import GradientBackground from "./GradientBackground";

export default function RightContainer({ children, id }) {
  return (
    <div id={id} className={styles.rightContainer}>
      {children}
      <GradientBackground />
    </div>
  );
}
