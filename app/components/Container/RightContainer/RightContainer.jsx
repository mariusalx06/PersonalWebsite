import styles from "./RightContainer.module.css";

export default function RightContainer({ children, id }) {
  return (
    <div id={id} className={styles.rightContainer}>
      {children}
    </div>
  );
}
