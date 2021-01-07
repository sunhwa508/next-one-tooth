import React, { ReactNode } from 'react';
import Link from 'next/link';
import Head from 'next/head';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'two-teeth' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header className={"h-100"}>
     <div className="p-4 bg-white rounded shadow">
      <nav>
        <Link href="/">
         <a className="text-2xl font-bold ml-8">릴리즈노트</a>
        </Link>
        <Link href={'/anonymous'}>
          <a className="text-2xl font-bold ml-8">익명게시판</a>
        </Link>
        <Link href={'/team'}>
         <a className="text-2xl font-bold ml-8">개발자소개</a>
        </Link>
      </nav>
     </div>
    </header>
    {children}
    <footer className={" absolute bottom-0 max-w-screen-xl bg-white mt-20"}>
      <div className={"py-12 px-4 sm:px-6 lg:py-16 lg:px-8"}>
      <span className={"mt-8 leading-6 text-gray-400 md:mt-0 md:order-1"}>Createdby one-tooth</span>
      </div>
    </footer>
  </div>
);

export default Layout;
