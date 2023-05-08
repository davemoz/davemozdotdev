import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";

import styles from "./ViewProjectLink.module.scss";

const ViewProjectLink = ({ href }) => {
  return (
    <a className={styles.link} href={href} target="_blank">
      View live project{" "}
      <FontAwesomeIcon className={styles.icon} icon={faExternalLink} />
    </a>
  );
};

export default ViewProjectLink;
