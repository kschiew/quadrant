import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link'

import { api } from '~/utils/api'

export default function Home() {
  const hello = api.post.hello.useQuery({ text: 'from tRPC' })

  return (
    <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
      <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
        Create <span>T3</span> App
      </h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
        <Link
          className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4"
          href="https://create.t3.gg/en/usage/first-steps"
          target="_blank"
        >
          <h3 className="text-2xl font-bold">First Steps →</h3>
          <div className="text-lg">
            Just the basics - Everything you need to know to set up your
            database and authentication.
          </div>
        </Link>
        <Link
          className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 "
          href="https://create.t3.gg/en/introduction"
          target="_blank"
        >
          <h3 className="text-2xl font-bold">Documentation →</h3>
          <div className="text-lg">
            Learn more about Create T3 App, the libraries it uses, and how to
            deploy it.
          </div>
        </Link>
      </div>
      <div className="flex flex-col items-center gap-2">
        <p className="text-2xl">
          {hello.data ? hello.data.greeting : 'Loading tRPC query...'}
        </p>
        <AuthShowcase />
      </div>
    </div>
  )
}

function AuthShowcase() {
  const { data: sessionData } = useSession()

  const { data: secretMessage } = api.post.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined },
  )

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? 'Sign out' : 'Sign in'}
      </button>
    </div>
  )
}
