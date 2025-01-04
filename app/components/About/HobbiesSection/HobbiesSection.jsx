import styles from "./HobbiesSection.module.css";
import Hobby from "./Hobby";

import DownhillSkiingIcon from "@mui/icons-material/DownhillSkiing";
import ForestIcon from "@mui/icons-material/Forest";

export default function HobbiesSection() {
  return (
    <section className={styles.hobbies}>
      <header className={styles.hobbiesHeader}>
        <h2>Favorite Hobbies</h2>
      </header>

      <Hobby
        direction="leftToRight"
        Icon={DownhillSkiingIcon}
        title="Skiing"
        description="A new sport I recently discovered and absolutely love for its thrill and adventure."
        iconColor="#7db9e8"
        titleColor="#7db9e8"
      />

      <Hobby
        direction="rightToLeft"
        Icon={ForestIcon}
        title="Exploring Nature"
        description="Finding peace and relaxation by immersing myself in nature's calm beauty."
        iconColor="#45b28b"
        titleColor="#45b28b"
      />
    </section>
  );
}
