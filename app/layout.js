import { SpeedInsights } from "@vercel/speed-insights/next";
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
    url: "https://personal-website-nu-navy-83.vercel.app", // to be modified with the correct URL
    siteName: "Marius Calin Portfolio",
    images: [
      {
        url: "https://personal-website-nu-navy-83.vercel.app/mcLogoOpenGraph.png", // To be replaced when finished
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
    image:
      "https://personal-website-nu-navy-83.vercel.app/mcLogoTwitterCard.png", // To be replaced when finished
  },
};

// Structured data for SEO
const structuredDataHome = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Marius Calin",
  jobTitle: "Full-Stack Web Developer",
  url: metadata.openGraph.url, // Use the url from metadata
  image: "https://personal-website-nu-navy-83.vercel.app/profile.jpg", // To be replaced when finished
  description:
    metadata.description ||
    "Marius Calin is a full-stack web developer specialized in front-end and back-end technologies.",
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

  education: [
    {
      "@type": "EducationOccupationalCredential",
      credentialCategory: "Degree",
      educationalCredentialAwarded:
        "Bachelor of Computer Science in Web Development",
      issuedBy: {
        "@type": "CollegeOrUniversity",
        name: "University of Craiova",
      },
      dateIssued: "2021-07-01",
    },
    {
      "@type": "EducationOccupationalCredential",
      credentialCategory: "Degree",
      educationalCredentialAwarded: "Master of Computer Science",
      issuedBy: {
        "@type": "CollegeOrUniversity",
        name: "University of Craiova",
      },
      dateIssued: "2023-07-01",
    },
    {
      "@type": "EducationOccupationalCredential",
      credentialCategory: "Course",
      educationalCredentialAwarded: "Mastering Python",
      issuedBy: {
        "@type": "Organization",
        name: "Udemy",
      },
      dateIssued: "2024-10-12",
    },
    {
      "@type": "EducationOccupationalCredential",
      credentialCategory: "Course",
      educationalCredentialAwarded: "Mastering Web Development",
      issuedBy: {
        "@type": "Organization",
        name: "Udemy",
      },
      dateIssued: "2025-01-15",
    },
    {
      "@type": "EducationOccupationalCredential",
      credentialCategory: "Course",
      educationalCredentialAwarded: "Mastering React",
      issuedBy: {
        "@type": "Organization",
        name: "Udemy",
      },
      dateIssued: "2025-01-15",
    },
  ],
  workExample: [
    {
      "@type": "CreativeWork",
      name: "Personal Portfolio Website",
      url: "https://personal-website-nu-navy-83.vercel.app/", // to be modified with the correct URL
      description:
        "A personal portfolio website showcasing full-stack web development projects, skills, and experience.",
      image:
        "https://personal-website-nu-navy-83.vercel.app/websiteSnapshot.png", // to be modified with the final version
      dateCreated: "2025-01-01",
      publisher: {
        "@type": "Person",
        name: "Marius Calin",
      },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredDataHome),
          }}
        ></script>
      </head>
      <body>
        <Navbar />

        <div className={styles.wrapper}>
          <div className={styles.mainContainer}>
            <LeftContainer />
            <RightContainer id="rightContainer">
              {children}
              <Footer />
            </RightContainer>
          </div>
        </div>
        <SpeedInsights />
      </body>
    </html>
  );
}
