import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithubSquare,
  faLinkedin,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";

import styles from "./SocialNav.module.scss";

type SocialsConfigType = {
  [slug: string]: {
    url: string;
    icon: JSX.Element;
  };
};

const socials: SocialsConfigType = {
  linkedin: {
    url: "https://www.linkedin.com/in/davejmoz/",
    icon: <FontAwesomeIcon icon={faLinkedin} />,
  },
  instagram: {
    url: "https://instagram.com/thewizardofmoz",
    icon: <FontAwesomeIcon icon={faInstagramSquare} />,
  },
  github: {
    url: "https://github.com/davemoz",
    icon: <FontAwesomeIcon icon={faGithubSquare} />,
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
