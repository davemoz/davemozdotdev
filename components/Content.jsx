import { attributes, react } from "../content/home.md";

import styles from "../styles/Content.module.scss";

const Content = ({ children }) => {
  const { sectionTitle, projects } = attributes;
  return (
    <main className={styles.content}>
      <article className={styles.article}>
        {children}
        {/*}
			<h2 className="section-title">{sectionTitle}</h2>
			<ul>
				{projects.map((project, k) => (
					<li key={k}>
						<h2>{project.title}</h2>
						<p>{project.description}</p>
					</li>
				))}
			</ul>
			{*/}
      </article>
    </main>
  );
};

export default Content;
