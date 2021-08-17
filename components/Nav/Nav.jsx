import NavLink from './NavLink';

import styles from '../../styles/Nav.module.scss';

const navItems = ['about']; //, 'work', 'contact'];

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles['nav-list']}>
        {navItems.map((item) => {
          return (
            <li key={item} className={styles['nav-item']}>
              <NavLink href={`/${item}`}>
                {item.replace(/\b\w/g, (l) => l.toUpperCase())}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
