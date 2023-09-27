import type { Metadata } from "next";
import Image, { StaticImageData } from "next/image";
import { compileMDX } from "next-mdx-remote/rsc";

import { getAllMdxProjects, getSingleMdxProject } from "@utils/getMdxProjects";
import { provideMDXComponents } from "~/mdx-components";
import TechUsed from "@components/Projects/TechUsed";

import CapstoneImg from "~/public/assets/img/projects/capstone-thumbnail.png";
import KayMozImg from "~/public/assets/img/projects/kaymoz-thumbnail.png";

import styles from "./SingleProjectPage.module.scss";

type MetadataProps = {
  params: { slug: string };
};

type SingleProjectPageProps = {
  params: {
    slug: string;
  };
};

type ProjectsImgConfigType = {
  [slug: string]: {
    img: StaticImageData;
    width: number;
    height: number;
  };
};

const projectsImgConfig: ProjectsImgConfigType = {
  capstone: {
    img: CapstoneImg,
    width: 1541,
    height: 735,
  },
  "kay-moz-ceramics": {
    img: KayMozImg,
    width: 1163,
    height: 597,
  },
};

export async function generateMetadata({
  params,
}: MetadataProps): Promise<Metadata> {
  const project = await getSingleMdxProject(params.slug);
  return {
    title: project.frontmatter.title,
  };
}

const SingleProjectPage = async ({ params }: SingleProjectPageProps) => {
  const { slug } = params;
  const { frontmatter, mdxSource } = await getSingleMdxProject(slug);
  const components = provideMDXComponents();
  const { content } = await compileMDX({
    source: mdxSource,
    options: {
      scope: frontmatter,
    },
    components,
  });
  return (
    <div className={styles.project}>
      <div className={styles.content}>
        {content}
        <div className={styles["img-wrap"]}>
          {frontmatter.image && (
            <Image
              alt={frontmatter.imageAlt}
              className={styles.img}
              src={projectsImgConfig[slug].img}
              height={projectsImgConfig[slug].height}
              width={projectsImgConfig[slug].width}
            />
          )}
        </div>
      </div>
      <div className={styles.sidebar}>
        <TechUsed
          frontend={frontmatter.frontend}
          backend={frontmatter.backend}
        />
      </div>
    </div>
  );
};

export async function generateStaticParams() {
  const projects = await getAllMdxProjects();

  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default SingleProjectPage;
