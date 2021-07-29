import "@fortawesome/fontawesome-free/js/brands";
import "@fortawesome/fontawesome-free/js/fontawesome";

import styles from "../styles/SocialNav.module.scss";

const SocialNav = () => {
  const socials = {
    github: {
      url: "https://github.com/davemoz",
      class: "fab fa-github-square",
    },
    stackoverflow: {
      url: "https://stackoverflow.com/users/1204415/dmoz",
      class: "fab fa-stack-overflow",
    },
    linkedin: {
      url: "https://linkedin.com/davemoz",
      class: "fab fa-linkedin",
    },
    twitter: {
      url: "https://twitter.com/dave_moz",
      class: "fab fa-twitter-square",
    },
    instagram: {
      url: "https://instagram.com/thewizardofmoz",
      class: "fab fa-instagram-square",
    },
  };

  return (
    <div className={styles.socials}>
      <ul className={styles["socials-list"]}>
        {Object.keys(socials).map((key, index) => (
          <li className={styles["social-item"]} key={key}>
            <a
              href={socials[key].url}
              className={styles["social-link"]}
              target="_blank"
              rel="noreferrer"
            >
              <i className={socials[key].class}></i>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialNav;
