import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent, DropdownMenuItem,
    DropdownMenuShortcut,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import {auth} from "@/auth";
import {logout} from "@/actions/logout";
import {SignOut} from "@/components/auth-components";

export const MainNav = async () => {

    const session = await auth()

    return (
        <nav className="md:ml-auto justify-end  w-full flex items-center gap-x-2">
            {/*<MainNavList />*/}

            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant={"ghost"} className="relative h-8 w-8 rounded-full">
                        <Avatar className="h-8 w-8">
                            <AvatarImage src={`${session?.user.image}`} alt="@shadcn"/>
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align={"end"} forceMount={true}>
                    {/* <DropdownMenuSeparator />*/}
                    <DropdownMenuItem>
                        <SignOut size={"sm"} />
                    <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

        </nav>
    );
};