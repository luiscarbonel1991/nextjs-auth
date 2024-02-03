import { signIn } from "@/auth"
import { Button } from "./ui/button"
import {logout} from "@/actions/logout";

export function SignIn({
                           provider,
                           ...props
                       }: { provider?: string } & React.ComponentPropsWithRef<typeof Button>) {
    return (
        <form
            action={async () => {
                "use server"
                await signIn(provider)
            }}
        >
            <Button {...props}>Sign In</Button>
        </form>
    )
}

export function SignOut(props: React.ComponentPropsWithRef<typeof Button>) {
    return (
        <form
            action={logout}
        >
            <Button className="cursor-pointer" variant="ghost" {...props}>
                Sign Out
            </Button>
        </form>
    )
}
