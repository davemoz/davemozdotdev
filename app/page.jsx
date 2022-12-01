import HomePage from "./HomePage";
import { getProjects } from "utils/getProjects";

const Home = async () => {
  const projects = await getProjects();

  return (
    <HomePage projects={projects} />
  );
};

export default Home;
