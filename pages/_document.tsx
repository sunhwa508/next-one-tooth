import Document, { DocumentContext, Html, Main, Head, NextScript } from 'next/document';
import React from 'react';

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
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
					<link href="/components/css/globalStyle.css" rel="stylesheet" />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
