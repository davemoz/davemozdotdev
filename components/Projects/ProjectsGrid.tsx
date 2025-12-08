import ProjectThumb from "./ProjectThumb";
import { getAllMdxProjects, Project } from "@utils/getMdxProjects";

import styles from "./ProjectsGrid.module.scss";

export default async function ProjectsGrid() {
  const projects = await getAllMdxProjects();
  const sortedProjects = projects.sort((a: Project, b: Project) => {
    const aProjectDate = a.frontmatter["date"];
    const bProjectDate = b.frontmatter["date"];
    if (aProjectDate === "Ongoing" && bProjectDate === "Ongoing") return 0;
    if (aProjectDate === "Ongoing" || bProjectDate === "Ongoing") {
      if (aProjectDate !== "Ongoing") return 1;
      return -1;
    }
    return parseInt(aProjectDate.slice(-4)) - parseInt(bProjectDate.slice(-4));
  });
  return (
    <div className={styles.projects}>
      {sortedProjects?.map((project) => (
        <ProjectThumb project={project} key={project.slug} />
      ))}
    </div>
  );
}
