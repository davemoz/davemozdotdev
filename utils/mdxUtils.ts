import fs from "fs";
import path from "path";

// PROJECTS_PATH is useful when you want to get the path to a specific file
export const PROJECTS_PATH = path.join(process.cwd(), "projects");

// projectFilePaths is the list of all mdx files inside the PROJECTS_PATH directory
export const projectFilePaths = fs
  .readdirSync(PROJECTS_PATH)
  // Only include md(x) files
  .filter((path) => /\.mdx?$/.test(path));
