"use client";

import styles from "./RightContainer.module.css";
import PageContextProvider from "../../../context/pageContext.jsx";

export default function RightContainer({ children, id }) {
  return (
    <div id={id} className={styles.rightContainer}>
      <PageContextProvider>{children}</PageContextProvider>
    </div>
  );
}
