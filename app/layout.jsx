import { Rubik } from "next/font/google";
import "./globals.css";


//components
import Navbar from "./components/Navbar";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata = {
  title: "VS | Next JS App",
  description: "First Application for learning Next JS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>
      <Navbar/>
      {children}
      </body>
    </html>
  );
}
