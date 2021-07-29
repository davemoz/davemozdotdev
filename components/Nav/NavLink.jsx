import styles from "../../styles/NavLink.module.scss";

const NavLink = ({ addlClassName, children }) => {
  return <a className={`${styles["nav-link"]} ${addlClassName}`}>{children}</a>;
};

export default NavLink;
