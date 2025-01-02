import Head from "next/head";
import LeftContainer from "./components/Container/LeftContainer/LeftContainer";
import RightContainer from "./components/Container/RightContainer/RightContainer";
import Navbar from "./components/General/Navigation/Navbar";
import "./globals.css";
import styles from "./layout.module.css";
import Footer from "./components/General/Footer";

export const metadata = {
  title: "Marius Calin Portfolio",
  description:
    "This is Marius's personal website where he's showcasing his full-stack web developer skills (front-end as well as backend)",
  openGraph: {
    title: "Marius Calin Portfolio",
    description:
      "Discover Marius's portfolio showcasing his full-stack web development skills, including both front-end and back-end expertise.",
    url: "https://www.yourwebsite.com", // To be replaced when finished
    siteName: "Marius Calin Portfolio",
    images: [
      {
        url: "https://www.yourwebsite.com/og-image.jpg", // To be replaced when finished
        width: 1200,
        height: 630,
        alt: "Marius Calin Portfolio Thumbnail",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marius Calin Portfolio",
    description:
      "Explore Marius's portfolio showcasing his full-stack web development expertise.",
    image: "https://www.yourwebsite.com/twitter-image.jpg", // To be replaced when finished
  },
};

// Structured data for SEO
const structuredDataHome = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Marius Calin",
  jobTitle: "Full-Stack Web Developer",
  url: metadata.openGraph.url, // Use the url from metadata
  image: "https://www.yourwebsite.com/profile image", // To be replaced when finished
  description:
    metadata.description ||
    "Marius Calin is a full-stack web developer specializing in front-end and back-end technologies.",
  skills: [
    "JavaScript",
    "Node.js",
    "React",
    "Redux",
    "HTML",
    "CSS",
    "RESTful APIs",
  ],
  hobbies: ["Skiing", "Exploring Nature"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <Head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(structuredDataHome),
            }}
          ></script>
        </Head>

        <div className={styles.wrapper}>
          <div className={styles.mainContainer}>
            <LeftContainer />
            <RightContainer id="rightContainer">
              {children}
              <Footer />
            </RightContainer>
          </div>
        </div>
      </body>
    </html>
  );
}
