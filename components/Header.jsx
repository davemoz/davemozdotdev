import React from 'react';
import Link from 'next/link';
import Nav from './Nav/Nav';
import SocialNav from './SocialNav';
import { attributes } from '../content/home.md';

import styles from '../styles/Header.module.scss';

const Header = () => {
  const { title, subtitle } = attributes;
  return (
    <>
      <header className={styles.header}>
        <div className={styles.branding}>
          <Link href={'/'}>
            <a className={styles.branding_link}>
              <h1 className={styles.title}>{title}</h1>
              <h2 className={styles.subtitle}>{subtitle}</h2>
            </a>
          </Link>
        </div>
        <Nav />
        <SocialNav />
      </header>
    </>
  );
};

export default Header;
