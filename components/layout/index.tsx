import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
 children?: ReactNode
 title?: string
}

const Layout = ({ children, title = 'two-teeth' }: Props) => (
    <div>
     <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
     </Head>
     <header>
      <nav>
       <Link href="/">
        <a>릴리즈노트</a>
       </Link>
       <Link href={"/anonymous"}>
        <a>익명게시판</a>
       </Link>
       <Link href={"/teampage"}>
        <a>개발자소개</a>
       </Link>
      </nav>
     </header>
     {children}
     <footer>
      <hr />
      <span>Createdby one-tooth</span>
     </footer>
    </div>
)

export default Layout
