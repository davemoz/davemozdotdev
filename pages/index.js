import Head from 'next/head';

import styles from '../styles/Home.module.scss';

const Home = () => {
  return (
    <>
      <Head>
        <title>Portfolio website of Dave Mozdzanowski</title>
      </Head>
      <div className={styles['coming-soon-wrap']}>
        <h2 className='title'>Coming Soon!</h2>
      </div>
    </>
  );
};

export default Home;
