import { attributes, react } from '../content/home.md'

const Body = () => {
	const { sectionTitle, projects } = attributes;
	return (
		<article className="content">
			<h2 className="coming-soon">Coming Soon!</h2>
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
			<style jsx>{`
			.content {
				flex: 1;
				font-family: Helvetica, Arial, sans-serif;
				display: flex;
				justify-content: center;
				align-items: center;
			}
			.coming-soon {
				text-align: center;
			}
			`}</style>
		</article>
	)
}

export default Body;