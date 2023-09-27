import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { PROJECTS_PATH } from "@utils/mdxUtils";

export type Project = {
  frontmatter: {
    [key: string]: any;
  };
  mdxSource: string;
  slug: string;
};

export async function getSingleMdxProject(slug: string): Promise<Project> {
  let projectFilePath;
  let formattedSlug;
  if (slug.includes(".mdx")) {
    projectFilePath = path.join(PROJECTS_PATH, slug);
    formattedSlug = slug.replace(".mdx", "");
  } else {
    projectFilePath = path.join(PROJECTS_PATH, `${slug}.mdx`);
    formattedSlug = slug;
  }
  const source = await fs.readFile(projectFilePath);
  const { content, data } = matter(source);

  return { frontmatter: data, mdxSource: content, slug: formattedSlug };
}

export async function getAllMdxProjects() {
  const files = await fs.readdir(PROJECTS_PATH);
  const projects = Promise.all(
    files.map(async (projectFileSlug) => {
      return await getSingleMdxProject(projectFileSlug);
    })
  );
  return projects;
}
