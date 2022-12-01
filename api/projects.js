import { getProjects } from "utils/getProjects";

export default function handler(req, res) {
  const projects = getProjects(1);

  res.status(200).json(projects);
}
