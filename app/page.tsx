import type { Metadata } from "next";

import ProjectsGrid from "@components/Projects/ProjectsGrid";

export const metadata: Metadata = {
  title: "Home",
};

const Home = () => {
  {/* @ts-expect-error Server Component */}
  return <ProjectsGrid />;
};

export default Home;
