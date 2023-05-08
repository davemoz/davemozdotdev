type ProjectPageLayoutProps = React.PropsWithChildren<{
  params: {
    slug: string;
  };
}>;

const ProjectPageLayout = ({ children, params }: ProjectPageLayoutProps) => {
  return <section>{children}</section>;
};

export default ProjectPageLayout;
