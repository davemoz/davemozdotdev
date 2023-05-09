import Link from "next/link";
import Nav from "./Nav/Nav";
import SocialNav from "./SocialNav";

import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.branding}>
        <Link className={styles.branding_link} href="/">
          <h1 className={styles.title}>Dave Mozdzanowski</h1>
        </Link>
      </div>
      <Nav />
      <SocialNav />
    </header>
  );
};

export default Header;
