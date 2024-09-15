import { api } from '~/utils/api'
import { Button } from '../button'
import { Card, CardContent, CardHeader, CardTitle } from '../card'
import { Input } from '../input'
import { PlusCircledIcon, TrashIcon } from '@radix-ui/react-icons'
import { Suspense, useState } from 'react'
import { Skeleton } from '../skeleton'

export const RolesCard = () => {
  const [roles, rolesQuery] = api.role.getAll.useSuspenseQuery()
  const { mutateAsync: createRoleMutateAsync } = api.role.create.useMutation()
  const { mutateAsync: deleteRoleMutateAsync } = api.role.delete.useMutation()
  const [newRole, setNewRole] = useState('')

  return (
    <Card>
      <CardHeader>
        <CardTitle>Roles</CardTitle>
      </CardHeader>
      <Suspense fallback={<Skeleton />}>
        <CardContent>
          <div className="flex flex-col items-start">
            {roles.map((role) => (
              <div
                className="flex min-w-full items-baseline justify-between gap-1"
                key={role.id}
              >
                <p className="px-3 py-2">{role.name}</p>
                <Button
                  variant={'ghost'}
                  size="icon"
                  className="shrink-0"
                  disabled={roles.length === 1}
                  onClick={async () =>
                    await deleteRoleMutateAsync(
                      { id: role.id },
                      { onSuccess: () => void rolesQuery.refetch() },
                    )
                  }
                >
                  <TrashIcon color="red" />
                </Button>
              </div>
            ))}
            <div className="flex items-stretch gap-1">
              <Input
                type="text"
                placeholder="Add new role..."
                size={14}
                value={newRole}
                onChange={(event) => setNewRole(event.target.value)}
              />
              <Button
                variant="ghost"
                size="icon"
                className="shrink-0"
                onClick={async () => {
                  await createRoleMutateAsync(
                    { name: newRole },
                    { onSuccess: () => void rolesQuery.refetch() },
                  )
                  setNewRole('')
                }}
              >
                <PlusCircledIcon />
              </Button>
            </div>
          </div>
        </CardContent>
      </Suspense>
    </Card>
  )
}
