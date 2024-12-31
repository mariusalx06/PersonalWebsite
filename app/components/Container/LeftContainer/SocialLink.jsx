import styles from "./SocialLink.module.css";

export default function SocialLink({ Icon }) {
  return (
    <button className={styles.bottomButton}>
      <Icon className={styles.bottomIcon} />
    </button>
  );
}
