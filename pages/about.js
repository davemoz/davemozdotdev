import Head from 'next/head';
import Image from 'next/image';

import aboutImage from '../public/kayla_dave.jpeg';

import styles from '../styles/About.module.scss';

const About = () => {
  return (
    <>
      <Head>
        <title>Portfolio website of Dave Mozdzanowski - About</title>
      </Head>
      <div className={styles.content}>
        <h2 className='title'>About</h2>
        <div className={styles.body_wrap}>
          <div className={styles.column}>
            <p className={styles.paragraph}>
              Hi, I'm Dave. I am a designer-turned-developer. I love learning
              new things about just about anything.
            </p>
            <p className={styles.paragraph}>
              I grew up in Western Massachusetts, and currently reside on Long
              Island, NY with my wife.
            </p>
          </div>
          <div className={styles.image_container}>
            <Image
              className={styles.image}
              src={aboutImage}
              alt='Kayla giving Dave a smooch :)'
              width='384'
              height='315'
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
