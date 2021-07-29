import styles from "../styles/Footer.module.scss";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <>
      <footer className={styles.footer_wrap}>
        copyright © {year} Dave Mozdzanowski
      </footer>
    </>
  );
};

export default Footer;
