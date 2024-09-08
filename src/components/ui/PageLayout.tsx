import Head from "next/head";
import { Navbar } from "./Navbar";

export const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Head>
        <title>Quadrant</title>
        <meta name="Task management tool inspired by 7 Habits" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <>
          <Navbar></Navbar>
          {children}
        </>
      </main>
    </>
  );
};
