import Head from 'next/head'
import { Navbar } from './Navbar'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
export const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Head>
        <title>Quadrant</title>
        <meta name="Task management tool inspired by 7 Habits" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`flex w-full min-h-screen flex-col bg-transparent items-start ${GeistSans.variable} ${GeistMono.variable}`}
      >
        <Navbar></Navbar>
        {children}
      </main>
    </>
  )
}
