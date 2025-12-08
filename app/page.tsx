import type { Metadata } from "next";

import ProjectsGrid from "@components/Projects/ProjectsGrid";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return <ProjectsGrid />;
}
