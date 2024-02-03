import {Button} from "@/components/ui/button";
import {siteConfig} from "@/config/site"
import {Icons} from "./icons";

import Link from "next/link";

const Footer = () => {
    return (
        <footer className="container flex items-center w-full p-6 bg-background z-50 dark:bg-[#1F1F1F]">
            <div className="mr-4 hidden md:flex w-full">
                <Link href="/" className="mr-6 flex items-center space-x-2">
                    <Icons.logo className="h-6 w-6"/>
                    <span className="hidden font-bold sm:inline-block">
                    {siteConfig.name}
                </span>
                </Link>
            </div>
            <div
                className="md:ml-auto w-full justify-between md:justify-end flex items-center gap-x-2 text-muted-foreground">
                <Button variant="ghost" size="sm">
                    Privacy Policy
                </Button>
                <Button variant="ghost" size="sm">
                    Terms & Conditions
                </Button>
            </div>
        </footer>
    )
}

export default Footer;