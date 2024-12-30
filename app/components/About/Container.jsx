import styles from "./Container.module.css";
import Hobbies from "./Hobbies";
import Memoji from "./Memoji";
import PersonalDetails from "./PersonalDetails";
import Skills from "./Skills";
export default function Container() {
  return (
    <div className={styles.container}>
      <div className={styles.parent}>
        <div className={styles.div1}>
          <PersonalDetails />
        </div>
        <div className={styles.div2}>
          <Hobbies />
        </div>
        <div className={styles.div3}>
          <Skills />
        </div>
        <div className={styles.div4}>
          <Memoji />
        </div>
        <div className={styles.div5}>
          <Memoji />
        </div>
        <div className={styles.div6}>
          <Memoji />
        </div>
      </div>
    </div>
  );
}
