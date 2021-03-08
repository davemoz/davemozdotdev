import React from 'react';
import { attributes } from '../content/home.md'
import SocialNav from './SocialNav';

const Header = () => {
	const { title, subtitle } = attributes;
  return (
		<>
			<header className="header">
				<div className="titles">
					<h1 className="title">{title}</h1>
					<h2 className="subtitle">{subtitle}</h2>
				</div>
				<SocialNav/>
			</header>
			<style jsx>{`
			.header {
				padding: 20px;
				display: flex;
				justify-content: space-between;
				font-family: Helvetica, Arial, sans-serif;
			}
			.titles {
				display: flex;
				flex-direction: column;
			}
			.title {
				margin: 0 0 5px;
			}
			.subtitle {
				margin: 0;
				color: #505050;
				font-weight: 200;
			}
			`}</style>
		</>
	)
}

export default Header;