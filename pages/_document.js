import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

class DaveDevDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link
            href='https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;700&display=swap'
            rel='stylesheet'
          />
          <Script src='https://identity.netlify.com/v1/netlify-identity-widget.js'></Script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default DaveDevDocument;
