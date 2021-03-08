import Head from 'next/head'
import Header from '@components/Header'
import Body from '@components/Body'
import Footer from '@components/Footer'

const Home = () => {
	return (
		<>
			<Head>
				<script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
			</Head>
			<Header/>
			<Body/>
			<Footer/>
			<style jsx global>{`
				html,
				body {
					height: 100%;
					margin: 0;
				}
				#__next {
					display: flex;
					min-height: 100vh;
					flex-direction: column;
				}
			`}</style>
		</>
	)
}

export default Home;