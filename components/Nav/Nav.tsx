import Link from "next/link";

import styles from "./Nav.module.scss";

const navItems = ["about"]; //, 'work', 'contact'];

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {navItems.map((item) => {
          return (
            <li key={item} className={styles.item}>
              <Link className={styles.link} href={`/${item}`}>
                {item.replace(/\b\w/g, (l) => l.toUpperCase())}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
