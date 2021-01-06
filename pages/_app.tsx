import React from 'react';
import Head from "next/head";
import { NextComponentType } from "next"
import { AppContext, AppInitialProps, AppProps } from "next/app";
import { wrapper } from '../store'

const  App: NextComponentType<AppContext, AppInitialProps, AppProps> = ({ Component, pageProps }) => {
 return (
     <>
      <Head>
       <title>one-tooth 일이팀</title>
      </Head>
       <Component {...pageProps} />
     </>
 );
};

export default wrapper.withRedux(App)
