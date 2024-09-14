import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from './navigation-menu'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './dropdown-menu'
import { Avatar, AvatarFallback } from './avatar'
import { AvatarImage } from '@radix-ui/react-avatar'
import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/react'

export const Navbar = () => {
  const { data: sessionData } = useSession()

  return (
    <NavigationMenu className="min-w-full px-2 py-2 gap-0 max-h-16 top-0 justify-between">
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href={'/dashboard'} legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Dashboard
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href={'/about'} legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              About
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>K</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>My profile</DropdownMenuItem>
          <DropdownMenuItem
            onClick={sessionData ? () => void signOut() : () => void signIn()}
          >
            {sessionData ? 'Log out' : 'Log in'}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </NavigationMenu>
  )
}
