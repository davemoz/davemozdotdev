import Link from 'next/link';

import styles from './NavLink.module.scss';

const NavLink = ({ href, children }) => {
  return (
    <Link className={styles['nav-link']} href={href}>
      {children}
    </Link>
  );
};

export default NavLink;
