import styles from "./Skills.module.css";
import Image from "next/image";

export default function Skills() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Tech Skills</h2>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <Image
            src="/icons/icons8-html-5.svg"
            alt="JavaScript Icon"
            className={styles.icon}
            width={20}
            height={20}
          />
          HTML
        </li>
        <li className={styles.listItem}>
          <Image
            src="/icons/icons8-css3.svg"
            alt="JavaScript Icon"
            className={styles.icon}
            width={20}
            height={20}
          />
          CSS
        </li>
        <li className={styles.listItem}>
          <Image
            src="/icons/icons8-javascript.svg"
            alt="JavaScript Icon"
            className={styles.icon}
            width={20}
            height={20}
          />
          JavaScript
        </li>
        <li className={styles.listItem}>
          <Image
            src="/icons/icons8-react-native.svg"
            alt="JavaScript Icon"
            className={styles.icon}
            width={20}
            height={20}
          />
          React
        </li>

        <li className={styles.listItem}>
          <Image
            src="/icons/icons8-curly-brackets-64.png"
            alt="JavaScript Icon"
            className={styles.icon}
            width={20}
            height={20}
          />
          REST API
        </li>
        <li className={styles.listItem}>
          <Image
            src="/icons/icons8-redux.svg"
            alt="JavaScript Icon"
            className={styles.icon}
            width={20}
            height={20}
          />
          Redux
        </li>
      </ul>
    </div>
  );
}
