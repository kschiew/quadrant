import { Button } from '../button'
import { Card, CardContent, CardHeader, CardTitle } from '../card'
import { Input } from '../input'
import { PlusCircledIcon, TrashIcon } from '@radix-ui/react-icons'

export const RolesCard = () => {
  const mockRoles = ['Father', 'Husband', 'Engineer']
  return (
    <Card>
      <CardHeader>
        <CardTitle>Roles</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-start">
          {mockRoles.map((role) => (
            <div
              className="flex min-w-full items-baseline justify-between"
              key={role}
            >
              <p className="px-3 py-2">{role}</p>
              <Button variant={'ghost'} size="icon" className="shrink-0">
                <TrashIcon color="red" />
              </Button>
            </div>
          ))}
          <div className="flex items-stretch">
            <Input type="text" placeholder="Add new role..." size={14} />
            <Button variant="ghost" size="icon" className="shrink-0">
              <PlusCircledIcon />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
