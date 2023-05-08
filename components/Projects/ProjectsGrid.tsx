import ProjectThumb from "./ProjectThumb";
import { getAllMdxProjects } from "@utils/getMdxProjects";

import styles from "./ProjectsGrid.module.scss";

const ProjectsGrid = async () => {
  const projects = await getAllMdxProjects();
  return (
    <div className={styles.projects}>
      {projects?.map((project) => (
        <ProjectThumb project={project} key={project.slug} />
      ))}
    </div>
  );
};

export default ProjectsGrid;
