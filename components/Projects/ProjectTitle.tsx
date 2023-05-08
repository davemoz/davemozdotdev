import ViewProjectLink from "@components/Projects/ViewProjectLink";

import styles from "./ProjectTitle.module.scss";

const ProjectTitle = ({ title, linkHref, subtitle, date }) => {
  return (
    <>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.wrap}>
        <h2 className={styles.subtitle}>
          {subtitle}
          {date && (
            <span className={styles.date}>
              <span className={styles.sep}>|</span> {date}
            </span>
          )}
        </h2>
        {linkHref && <ViewProjectLink href={linkHref} />}
      </div>
    </>
  );
};

export default ProjectTitle;
