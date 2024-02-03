'use client';
import Link from "next/link";
import useOnScreen from "@/hooks/use-on-screen";


export const HeadingContact = () => {

    const [ref, visible] = useOnScreen({threshold: 0.1});

    return (
        <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 lg:mt-40" ref={ref}>
            <div
                className={`mx-auto max-w-2xl lg:max-w-none transition-opacity duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}>
                <div className="-mx-6 bg-neutral-950 px-6 py-20 sm:mx-0 sm:py-32 md:px-12 rounded-3xl"
                     style={{opacity: 1, transform: 'none'}}>
                    <div className="mx-auto max-w-4xl">
                        <div className="max-w-xl"><h2
                            className="font-display text-3xl font-medium text-white [text-wrap:balance] sm:text-4xl">Tell
                            us about your project</h2>
                            <div className="mt-6 flex">
                                <Link
                                    className="inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition bg-white text-neutral-950 hover:bg-neutral-200"
                                    href="/contact">
                                    <span className="relative top-px">Say Hej</span>
                                </Link>
                            </div>
                            <div className="mt-10 border-t border-white/10 pt-10"><h3
                                className="font-display text-base font-semibold text-white">Our offices</h3>
                                <ul role="list" className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
                                    <li>
                                        <address className="text-sm not-italic text-neutral-300"><strong
                                            className="text-white">Austin</strong><br/>South 1ts Street<br/>5555,
                                            Texas, USA
                                        </address>
                                    </li>
                                    <li>
                                        <address className="text-sm not-italic text-neutral-300"><strong
                                            className="text-white">Austin</strong><br/>South 1ts Street<br/>5555,
                                            Texas, USA
                                        </address>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}