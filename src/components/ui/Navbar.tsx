import { cn } from "~/lib/utils"
import { NavigationMenu } from "./navigation-menu"
import { NavigationMenuList } from "@radix-ui/react-navigation-menu"
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "./dropdown-menu"
import { Avatar } from "./avatar"
import { AvatarImage } from "@radix-ui/react-avatar"

export const Navbar = () => {
    return <NavigationMenu className='justify-between'>
    <NavigationMenuList></NavigationMenuList>
    <DropdownMenu>
        <DropdownMenuTrigger>
            <Avatar>
                <AvatarImage>K</AvatarImage>
            </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>

        </DropdownMenuContent>
    </DropdownMenu>
    </NavigationMenu>
}