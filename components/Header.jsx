import React from "react";
import Nav from "./Nav/Nav";
import SocialNav from "./SocialNav";
import { attributes } from "../content/home.md";

import styles from "../styles/Header.module.scss";

const Header = () => {
  const { title, subtitle } = attributes;
  return (
    <>
      <header className={styles.header}>
        <div className={styles.titles}>
          <h1 className={styles.title}>{title}</h1>
          <h2 className={styles.subtitle}>{subtitle}</h2>
        </div>
        <Nav />
        <SocialNav />
      </header>
    </>
  );
};

export default Header;
