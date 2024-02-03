import { Poppins} from "next/font/google";
import {cn} from "@/lib/utils";
import {Icons} from "@/components/icons";
import {Logo} from "@/app/(marketing)/_components/logo";
import Link from "next/link";
import {siteConfig} from "@/config/site";


const font = Poppins({
    subsets: ["latin"],
    weight: ["600"],
});

interface HeaderProps {
    label: string;
}

export const Header = ({
                           label,
                       }: HeaderProps) => {
    return (
        <div className="w-full flex flex-col gap-y-4 items-center justify-center">
            <Link href="/" className="flex items-center space-x-1">
                <Icons.logo className="h-8 w-8 text-primary" />
                <span className="font-bold sm:inline-block text-3xl">
                {siteConfig.name}
            </span>
            </Link>
            <p className="text-muted-foreground text-sm">
                {label}
            </p>
        </div>
    );
};