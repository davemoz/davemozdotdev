import ProjectThumb from "./ProjectThumb";

import styles from "./ProjectsGrid.module.scss";

const ProjectsGrid = ({ projects }) => {
  return (
    <div className={styles.projects}>
      {projects?.map((project) => (
        <ProjectThumb project={project} key={project.slug} />
      ))}
    </div>
  )
}

export default ProjectsGrid;