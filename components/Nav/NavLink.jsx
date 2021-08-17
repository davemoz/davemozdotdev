import Link from 'next/link';

import styles from '../../styles/NavLink.module.scss';

const NavLink = ({ href, children }) => {
  return (
    <Link href={href} passHref>
      <a className={styles['nav-link']}>{children}</a>
    </Link>
  );
};

export default NavLink;
