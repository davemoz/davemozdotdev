import { attributes, react } from '../content/home.md'

const Body = () => {
	const { sectionTitle, projects } = attributes;
	return (
		<article>
			<h2 className="section-title">{sectionTitle}</h2>
			<ul>
				{projects.map((project, k) => (
					<li key={k}>
						<h2>{project.title}</h2>
						<p>{project.description}</p>
					</li>
				))}
			</ul>
		</article>
	)
}

export default Body;