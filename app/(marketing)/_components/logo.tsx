import Link from "next/link";
import { Icons } from "./icons";
import { siteConfig } from "@/config/site";


export const Logo = () => {
    return (
        <Link href="/" className="mr-6 flex items-center space-x-2 w-full">
            <Icons.logo className="h-6 w-6" />
            <span className="font-bold sm:inline-block">
                {siteConfig.name}
            </span>
        </Link>
    );
};