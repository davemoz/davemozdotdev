import type { MDXComponents } from "mdx/types";

import ProjectTitle from "@components/Projects/ProjectTitle";
import TechUsed from "@components/Projects/TechUsed";

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.
function H1({ children }) {
  return <h1>{children}</h1>;
}

function H2({ children }) {
  return <h2>{children}</h2>;
}

export function useMDXComponents(): MDXComponents {
  return { h1: H1, h2: H2, ProjectTitle, TechUsed };
}
