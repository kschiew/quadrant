import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { RolesCard } from '~/components/ui/Role/RolesCard'

const DashboardPage = () => {
  const { data: sessionData } = useSession()
  const router = useRouter()
  useEffect(() => {
    if (!sessionData) {
      router.push('/')
    }
  }, [sessionData, router])

  return (
    <div className="flex flex-col w-full items-center">
      <RolesCard></RolesCard>
    </div>
  )
}

export default DashboardPage
