import Document, {
  DocumentContext,
  Html,
  Main,
  Head,
  NextScript,
} from 'next/document';
import React from 'react';

class MyDocument extends Document {
  //getStaticProps 서버에서 미리 처리하도록 도와줌
  static async getStaticProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    return (
      <Html lang="ko">
        <Head>
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
