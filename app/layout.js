import "./globals.css";
import Navbar from "./components/Navigation/Navbar";

export const metadata = {
  title: "Marius Calin Portfolio",
  description:
    "This is Marius's personal website where he's showcasing his full-stack web developer skills(front-end as well as backend)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
