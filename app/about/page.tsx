import type { Metadata } from "next";
import Image from "next/image";

import styles from "./About.module.scss";

export const metadata: Metadata = {
  title: "About",
};

const About = () => {
  return (
    <div className={styles.content}>
      <h2 className="title">About</h2>
      <div className={styles.body_wrap}>
        <div className={styles.column}>
          <p className={styles.paragraph}>
            Hi, I&apos;m Dave. I am a designer-turned-software engineer with 10+
            and 5+ years of experience, respectively. I love learning new things
            about just about anything.
          </p>
          <p className={styles.paragraph}>
            I am currently a Senior Software Engineer at{" "}
            <a
              href="https://ixl.com/company"
              target="_blank"
              rel="noreferrer noopener"
            >
              IXL Learning
            </a>
            . The selection of work on this site will continue to change as I
            find time for interesting personal projects.
          </p>
          <p className={styles.paragraph}>
            I grew up in Western Massachusetts, and currently reside on Long
            Island, NY with my wife, son, and daughter.
          </p>
        </div>
        <div className={styles.image_container}>
          <Image
            className={styles.image}
            src="/assets/img/pages/about/kayla_dave.jpeg"
            alt="Kayla giving Dave a smooch :)"
            width="384"
            height="315"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
