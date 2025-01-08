import styles from "./HobbiesSection.module.css";
import Hobby from "./Hobby";

import DownhillSkiingIcon from "@mui/icons-material/DownhillSkiing";
import ForestIcon from "@mui/icons-material/Forest";

const hobbies = [
  {
    direction: "leftToRight",
    Icon: DownhillSkiingIcon,
    title: "Skiing",
    description:
      "A new sport I recently discovered and absolutely love for its thrill and adventure.",
    iconColor: "#7db9e8",
    titleColor: "#7db9e8",
  },
  {
    direction: "rightToLeft",
    Icon: ForestIcon,
    title: "Exploring Nature",
    description:
      "Finding peace and relaxation by immersing myself in nature's calm beauty.",
    iconColor: "#45b28b",
    titleColor: "#45b28b",
  },
];

export default function HobbiesSection() {
  return (
    <section className={styles.hobbies}>
      <header className={styles.hobbiesHeader}>
        <h3>Favorite Hobbies</h3>
      </header>

      {hobbies.map((hobby, index) => (
        <Hobby
          key={index}
          direction={hobby.direction}
          Icon={hobby.Icon}
          title={hobby.title}
          description={hobby.description}
          iconColor={hobby.iconColor}
          titleColor={hobby.titleColor}
        />
      ))}
    </section>
  );
}
