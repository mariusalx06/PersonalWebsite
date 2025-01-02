import {
  GitHub,
  Instagram,
  LinkedIn,
  WhatsApp,
  Email,
} from "@mui/icons-material";
import styles from "../app/page.module.css";

const icons = [
  {
    icon: <GitHub className={styles.github} />,
    link: "https://github.com/mariusalx06",
  },
  {
    icon: <LinkedIn className={styles.linkedin} />,
    link: "https://www.linkedin.com/in/marius-calin-473933204/",
  },
  {
    icon: <Instagram className={styles.instagram} />,
    link: "https://www.instagram.com/marius.alex06/",
  },
  {
    icon: <Email className={styles.email} />,
    link: "mailto:marius.calin0699@gmail.com",
  },
  {
    icon: <WhatsApp className={styles.whatsapp} />,
    link: "https://wa.me/40727727722?text=Hello%20Marius,%20I%20liked%20your%20website%20and%20I%20would%20like%20to%20get%20in%20touch!",
  },
];

export default icons;
