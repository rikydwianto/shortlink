//@ts-nocheck
import Header from "./header"
import Head from 'next/head'
export default function Layout({children,title}) {
  return (
    <>

    <Head>
        <title>{title} | URL Shortner </title>
        <meta property="og:title" content="{title}" key="title" />
    </Head>
      
    <div className="col-lg-10 mx-auto ">
    <Header/>

      <main>
        {children}
      
      </main>
      <footer className="pt-5 my-5 text-muted border-top">
        Created by Riky Dwianto 2022
      </footer>
</div>

    </>

  )
}
