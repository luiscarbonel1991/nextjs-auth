"use client";

import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {getNavConfig} from "@/config/nav-config";


export const MainNavList = () => {

    const pathname = usePathname();
    const {main_marketing: mainNav} = getNavConfig()

    return (
        <>
            {
                mainNav
                    .map((item, index) => {
                            return (
                                <Button asChild variant="ghost" size="sm"
                                        className={cn(
                                            "hidden md:flex rounded-3xl transition-transform hover:text-foreground/80 hover:translate-y-[-1px] hover:scale-[1.01] hover:border-b-2 hover:border-primary",
                                            pathname === item.href ? "text-foreground" : "text-foreground/60"
                                        )}
                                        key={index}
                                >
                                    <Link href={item.href ?? '/'}>{item.title}</Link>
                                </Button>
                            )
                        }
                    )
            }
        </>
    )
}