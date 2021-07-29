import Link from "next/link";
import NavLink from "./NavLink";

import styles from "../../styles/Nav.module.scss";

const navItems = ["about", "work", "contact"];

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles["nav-list"]}>
        {navItems.map((item) => {
          return (
            <li key={item} className={styles["nav-item"]}>
              <Link href={`/${item}`} passHref>
                <NavLink addlClassName="nav-link">
                  {item.replace(/\b\w/g, (l) => l.toUpperCase())}
                </NavLink>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
