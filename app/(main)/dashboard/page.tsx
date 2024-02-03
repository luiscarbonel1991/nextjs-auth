import {auth, signOut} from "@/auth";
import {
    Card,
    CardHeader,
    CardContent
} from "@/components/ui/card";


const DashboardPage = async () => {
    const session = await auth()


    return (
        <section className="mt-40 container grid grid-cols-1">
            <Card>
                <CardHeader>
                    <h2 className="text-2xl font-bold">Dashboard</h2>
                </CardHeader>
                <CardContent className="grid gap-4">
                    <p className="text-sm font-medium leading-none">Welcome: {session?.user.name}</p>
                    <p className="text-sm font-medium leading-none">Email: {session?.user.email}</p>
                    <p className="text-sm font-medium leading-none">User ID: {session?.user.id}</p>
                    <p className="text-sm font-medium leading-none">isOAuth: { `${(!!session?.user.isOAuth)}`}</p>
                </CardContent>
            </Card>
        </section>
    )
}

export default DashboardPage