'use client';

import {useState} from "react";
import {Sheet, SheetContent, SheetTrigger} from "./ui/sheet";
import {Button} from "./ui/button";
import {siteConfig} from "@/config/site";
import {Icons} from "@/app/(marketing)/_components/icons";
import {MobileLink} from "./mobile-link";
import {Logo} from "@/app/(marketing)/_components/logo";
import {getNavConfig, navConfig} from "@/config/nav-config";
import {ScrollArea} from "./ui/scroll-area";

export const MobileNav = () => {

    const [isOpen, setIsOpen] = useState(false);
    const {sidebar_marketing: sideBarNav} = getNavConfig();

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
                <Button
                    variant="ghost"
                    className="mr-4 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
                >
                    <svg
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 transform rotate-180"
                    >
                        <path
                            d="M3 5H11"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                        <path
                            d="M3 12H16"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                        <path
                            d="M3 19H21"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                    </svg>
                    <span className="sr-only">Toggle Menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-[90vw] md:max-w-[400px]">

                <MobileLink
                    href="/"
                    className="flex items-center"
                    onOpenChange={setIsOpen}
                >
                    <Icons.logo className="mr-2 h-4 w-4"/>
                    <span className="font-bold">{siteConfig.name}</span>
                </MobileLink>


                <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
                    <div className="flex flex-col space-y-3">
                        {sideBarNav.map(
                            (item) =>
                                item.href && (
                                    <MobileLink
                                        key={item.href}
                                        href={item.href}
                                        onOpenChange={setIsOpen}
                                        className="hover:bg-accent hover:text-accent-foreground p-2 rounded-3xl transition-colors w-6/12">


                                        {item.title}
                                    </MobileLink>
                                )
                        )}
                    </div>
                </ScrollArea>
            </SheetContent>
        </Sheet>
    );

};

