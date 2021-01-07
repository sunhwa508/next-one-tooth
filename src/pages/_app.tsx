import React from 'react';
import App, { AppContext, AppProps } from 'next/app';
import { wrapper } from '../../store';
import "tailwindcss/tailwind.css";
import '../styles/globals.css'
function MyApp({ Component, pageProps }: AppProps) {
 return <Component {...pageProps} />
}
MyApp.getInitialProps = async (appContext: AppContext) => {
 const appProps = await App.getInitialProps(appContext);
 return { ...appProps }
}
export default wrapper.withRedux(MyApp);