import styles from "./RightContainer.module.css";

export default function RightContainer({ children }) {
  return <div className={styles.rightContainer}>{children}</div>;
}
