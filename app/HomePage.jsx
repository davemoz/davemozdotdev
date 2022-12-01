"use client";

import { MDXProvider } from "@mdx-js/react";
import ProjectsGrid from "@components/Projects/ProjectsGrid";

const HomePage = ({ projects }) => {
  return (
    <>
      <MDXProvider>
        <ProjectsGrid projects={projects} />
      </MDXProvider>
    </>
  );
};

export default HomePage;
