import Link from "next/link";
import {Button} from "@/components/ui/button";
import SvgBackground from "@/components/svg-background";
import Image from "next/image";


export const Hero = () => {

    return (

        <>
            <main className="isolate container grid lg:grid-cols-2 place-items-center pt-32 md:pb-24 px-4 md:px-10">
                <SvgBackground/>


                <div className="py-6 md:order-1 hidden md:block">


                    <Image
                        src="/static/images/marketing/hero_v6.png"
                        alt="A Developer in front of a computer developing software"
                        height={440}
                        width={440}
                        className="rounded-3xl shadow-md"
                    />
                    {/*<div className="relative h-[440px] w-[440px] rounded-3xl shadow-md overflow-hidden">
                        <div className="flex h-full">
                            <div className="w-1/2 bg-black"></div>
                            <div className="w-1/2 bg-gray-500"></div>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-xl font-bold text-white">Your image here</span>
                        </div>
                    </div>*/}
                </div>

                <aside>
                    <Button variant="secondary" className="mb-2 rounded-tl-2xl rounded-br-2xl"
                            size="sm">
                        Welcome
                    </Button>
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
                        Let’s make your product a {` `} <span className="tracking-tight inline from-[#FF1CF7] to-[#b249f8] bg-clip-text text-transparent bg-gradient-to-b">success</span>
                    </h1>
                    <p className="mt-6 text-xl text-gray-600 dark:text-gray-400">
                        We are a software development studio that helps startups and enterprises build
                        quality software to achieve growth and scale.
                    </p>
                    <div className="mt-6 flex flex-col sm:flex-row gap-3">
                        <Button asChild variant="default"
                                className="rounded-3xl transition ease-in-out delay-150 hover:-translate-y-1 scale-105 font-bold"
                                size="lg">
                            <Link
                                href="/contact"
                                aria-label="Let's Talk"
                            >
                                Let's Talk
                            </Link>
                        </Button>
                    </div>
                </aside>
            </main>
        </>
    );
}