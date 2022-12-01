import { readFileSync } from "fs";
import { readdir } from "fs/promises";
import path from "path";
import matter from "gray-matter";

export async function getProjects() {
  const dirFiles = await readdir(path.join(process.cwd(), "projects"), {
    withFileTypes: true,
  });
  const projects = await dirFiles.map((file) => {
    if (!file.name.endsWith(".mdx")) return;

    const fileContent = readFileSync(
      path.join(process.cwd(), "projects", file.name),
      "utf-8"
    );
    const { data, content } = matter(fileContent);
    const slug = file.name.replace(/.mdx$/, "");

    return { data, content, slug };
  });

  return projects;
}
