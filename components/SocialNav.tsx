import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithubSquare,
  faStackOverflow,
  faLinkedin,
  faTwitterSquare,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";

import styles from "./SocialNav.module.scss";

const socials = {
  github: {
    url: "https://github.com/davemoz",
    icon: <FontAwesomeIcon icon={faGithubSquare} />,
  },
  stackoverflow: {
    url: "https://stackoverflow.com/users/1204415/dmoz",
    icon: <FontAwesomeIcon icon={faStackOverflow} />,
  },
  linkedin: {
    url: "https://linkedin.com/davemoz",
    icon: <FontAwesomeIcon icon={faLinkedin} />,
  },
  twitter: {
    url: "https://twitter.com/dave_moz",
    icon: <FontAwesomeIcon icon={faTwitterSquare} />,
  },
  instagram: {
    url: "https://instagram.com/thewizardofmoz",
    icon: <FontAwesomeIcon icon={faInstagramSquare} />,
  },
};

const SocialNav = () => {
  return (
    <ul className={styles["socials-list"]}>
      {Object.keys(socials).map((key) => (
        <li className={styles["social-item"]} key={key}>
          <Link
            href={socials[key].url}
            className={styles["social-link"]}
            target="_blank"
            rel="noreferrer"
          >
            {socials[key].icon}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SocialNav;
