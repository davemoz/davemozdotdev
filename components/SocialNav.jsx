import Link from 'next/link';
import { library, icon } from "@fortawesome/fontawesome-svg-core";
import {
  faGithubSquare,
  faStackOverflow,
  faLinkedin,
  faTwitterSquare,
  faInstagramSquare
} from "@fortawesome/free-brands-svg-icons";

library.add([faGithubSquare, faStackOverflow, faLinkedin, faTwitterSquare, faInstagramSquare]);

import styles from "./SocialNav.module.scss";

const socials = {
  github: {
    url: "https://github.com/davemoz",
    icon: icon({ prefix: 'fab', iconName: 'github-square' }).html
  },
  stackoverflow: {
    url: "https://stackoverflow.com/users/1204415/dmoz",
    icon: icon({ prefix: 'fab', iconName: 'stack-overflow' }).html
  },
  linkedin: {
    url: "https://linkedin.com/davemoz",
    icon: icon({ prefix: 'fab', iconName: 'linkedin' }).html
  },
  twitter: {
    url: "https://twitter.com/dave_moz",
    icon: icon({ prefix: 'fab', iconName: 'twitter-square' }).html
  },
  instagram: {
    url: "https://instagram.com/thewizardofmoz",
    icon: icon({ prefix: 'fab', iconName: 'instagram-square' }).html
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
            dangerouslySetInnerHTML={{ __html: socials[key].icon }}
          />
        </li>
      ))}
    </ul>
  );
};

export default SocialNav;
