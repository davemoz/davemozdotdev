import Header from "../components/Header";
import Footer from "../components/Footer";

import { Work_Sans } from "next/font/google";
const workSans = Work_Sans({ subsets: ["latin"], display: "swap" });

import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

import "../styles/global.scss";
import styles from "./RootLayout.module.scss";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Portfolio of Dave Mozdzanowski",
    template: "%s | Portfolio of Dave Mozdzanowski",
  },
};

const RootLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <html className={workSans.className}>
      <body>
        <div className={styles.wrap}>
          <Header />
          <main className={styles.content}>
            <article>{children}</article>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
