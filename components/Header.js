import { attributes } from '../content/home.md'

const Header = () => {
	const { title, subtitle } = attributes;
  return (
		<div className="header">
			<h1 className="title">{title}</h1>
			<h2 className="subtitle">{subtitle}</h2>
		</div>
	)
}

export default Header;