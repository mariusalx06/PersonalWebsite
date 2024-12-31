import LeftContainer from "./components/Container/LeftContainer/LeftContainer";
import RightContainer from "./components/Container/RightContainer/RightContainer";
import Navbar from "./components/Navigation/Navbar";
import "./globals.css";
import styles from "./layout.module.css";

export const metadata = {
  title: "Marius Calin Portfolio",
  description:
    "This is Marius's personal website where he's showcasing his full-stack web developer skills (front-end as well as backend)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className={styles.wrapper}>
          <div className={styles.mainContainer}>
            <LeftContainer />
            <RightContainer id="rightContainer">{children}</RightContainer>
          </div>
        </div>
      </body>
    </html>
  );
}
