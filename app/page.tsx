import type { Metadata } from "next";

import ProjectsGrid from "@components/Projects/ProjectsGrid";

export const metadata: Metadata = {
  title: "Home",
};

const Home = () => {
  return <ProjectsGrid />;
};

export default Home;
