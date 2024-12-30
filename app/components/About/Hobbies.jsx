import DownhillSkiingIcon from "@mui/icons-material/DownhillSkiing";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import styles from "./Hobbies.module.css";

export default function Hobbies() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Favorite hobbies</h2>
      <div className={styles.hobbiesRow}>
        <div className={styles.hobby}>
          <SlideshowIcon className={styles.iconMovies} />
          <h2 className={styles.hobbyTitle}>Movies</h2>
          <p className={styles.description}>
            Binge-watching my way through Netflix—one cozy night at a time!
          </p>
        </div>
        <div className={styles.hobby}>
          <DownhillSkiingIcon className={styles.iconSkiing} />
          <h2 className={styles.hobbyTitle}>Skiing</h2>
          <p className={styles.description}>
            Carving my way through the slopes—newfound love for skiing!
          </p>
        </div>
      </div>
    </div>
  );
}
