import Document, {
  Html,
  Main,
  Head,
  NextScript,
} from 'next/document';
import React from 'react';

class MyDocument extends Document {

  render() {
    return (
      <Html lang="ko">
        <Head>
         <title>one-tooth 일이팀</title>
          <meta charSet="utf-8" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <link href="/src/components/css/globalStyle.css" rel="stylesheet" />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
