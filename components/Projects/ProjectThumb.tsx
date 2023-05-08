import Image from "next/image";
import Link from "next/link";

import styles from "./ProjectThumb.module.scss";

const ProjectThumb = ({ project }) => {
  const {
    frontmatter: { date, image, imageAlt, title, subtitle },
    slug,
  } = project;

  return (
    <Link className={styles.link} href={`/projects/${slug}`}>
      <h2 className={styles.title}>{title}</h2>
      <h3 className={styles.subtitle}>
        {subtitle}
        {date && (
          <span className={styles.date}>
            <span className={styles.sep}>|</span> {date}
          </span>
        )}
      </h3>
      <div className={styles["img-wrap"]}>
        {image && (
          <Image
            alt={imageAlt}
            className={styles.img}
            src={image}
            height={180}
            width={300}
          />
        )}
      </div>
    </Link>
  );
};

export default ProjectThumb;
