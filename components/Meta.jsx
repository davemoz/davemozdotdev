import Head from 'next/head';

const Meta = ({ title }) => {
  return (
    <Head>
      <title>{title} - Dave Mozdzanowski</title>
      <meta
        name='keywords'
        content='Dave Mozdzanowski, David Mozdzanowski, Dave Moz, software engineer, frontend engineer, developer, designer'
      />
    </Head>
  );
};

export default Meta;

Meta.defaultProps = {
  title: 'Dave Mozdzanowski - Software Engineer'
};