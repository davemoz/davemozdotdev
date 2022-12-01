import { getProjects } from "utils/getProjects";
import Image from 'next/image';

import styles from './ProjectPage.module.scss';

const ProjectPage = async ({ slug }) => {
  const projects = await getProjects();
  const project = projects.find(project => project.slug === slug);
  const {
    data: {
      date, image, imageAlt, title, subtitle
    },
    content
  } = project;

  return (
    <>
      <h1 className={styles.title}>{title}</h1>
      <h2 className={styles.subtitle}>{subtitle}{date && <span className={styles.date}><span className={styles.sep}>|</span> {date}</span>}</h2>
      <div className={styles.content}>{content}</div>
      <div className={styles['img-wrap']}>
        {image && (
          <Image alt={imageAlt} className={styles.img} src={image} fill={true} />
        )}
      </div>
    </>
  )
};

export default ProjectPage;

