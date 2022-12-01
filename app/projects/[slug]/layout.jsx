import { getProjects } from "utils/getProjects";
import ProjectPage from "./page";

const ProjectPageLayout = ({ params }) => {
  const { slug } = params;

  return (
    <ProjectPage slug={slug} />
  )
};

export default ProjectPageLayout;

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map(project => ({ slug: project.slug }));
}
