import '@fortawesome/fontawesome-free/js/brands';
import '@fortawesome/fontawesome-free/js/fontawesome';

const SocialNav = () => {
	const socials = {
		github: {
			url: 'https://github.com/davemoz',
			icon: 'fab fa-github-square'
		},
		stackoverflow: {
			url: 'https://stackoverflow.com/users/1204415/dmoz',
			icon: 'fab fa-stack-overflow'
		},
		linkedin: {
			url: 'https://linkedin.com/davemoz',
			icon: 'fab fa-linkedin'
		},
		twitter: {
			url: 'https://twitter.com/dave_moz',
			icon: 'fab fa-twitter-square'
		},
		instagram: {
			url: 'https://instagram.com/thewizardofmoz',
			icon: 'fab fa-instagram-square'
		},
	};

	return (
		<>
			<div className="socials">
				<ul className="socials-list">
				{Object.keys(socials).map((key, index) =>
					<li
						className="social-item"
						key={index}
					>
						<a 
							href={socials[key].url} 
							className="social-link" 
							target="_blank"
						>
							<i className={socials[key].icon}></i>
						</a>
					</li>
				)}
				</ul>
			</div>
			<style jsx>{`
				.socials-list {
					list-style: none;
					display: flex;
					align-items: center;
					margin: 0;
					padding: 0;
				}
				.social-item {
					margin-right: 10px;
				}
				.social-link {
					color: #5d5d5d;
					font-size: 24px;
				}
				.social-link svg {
					width: 24px;
					height: 24px;
				}
			`}</style>
		</>
	)
}

export default SocialNav;