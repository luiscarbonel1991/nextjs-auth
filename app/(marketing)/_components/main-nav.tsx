import {MainNavList} from "@/app/(marketing)/_components/main-nav-list";
import {Button} from "@/components/ui/button";
import Link from "next/link";

const MainNav = () => {

    return (
        <nav className="md:ml-auto justify-end  w-full flex items-center gap-x-2">
            <MainNavList />

            <Button asChild className="rounded-3xl shadow-2xl transition-transform hover:translate-y-[-1px] hover:scale-[1.01] hover:border-b-2 hover:border-primary bg-gradient-to-r from-blue-400 to-blue-600">
                <Link href={"/auth/login"}>Sign In</Link>
            </Button>
        </nav>
    );
};

export default MainNav;