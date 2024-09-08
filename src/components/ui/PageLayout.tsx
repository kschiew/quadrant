import Head from 'next/head'
import { Navbar } from './Navbar'

export const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Head>
        <title>Quadrant</title>
        <meta name="Task management tool inspired by 7 Habits" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex w-full min-h-screen flex-col items-center justify-center bg-red-400">
        <Navbar></Navbar>
        {children}
      </main>
    </>
  )
}
