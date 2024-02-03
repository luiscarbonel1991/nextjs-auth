import CardService from "@/app/(marketing)/_components/card-service";
import {AreaChart, Braces, Terminal} from "lucide-react";


export const ServicesSection = () => {
    return (
        <section className="container grid grid-cols-1 pt-16 px-4 md:px-10 py-10">

            <div className="flex flex-wrap w-ful mb-8">
                <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                    <h2 className="sm:text-4xl text-3xl font-bold mb-8">Services</h2>
                    <h3 className="sm:text-5xl text-4xl font-bold mb-4">We help you {` `}
                        <span className="tracking-tight inline from-[#FF1CF7] to-[#b249f8] bg-clip-text text-transparent bg-gradient-to-b">identity</span>,
                        {` `} explore
                        and respond to new
                        opportunities.</h3>
                    <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">We are a software development studio
                        that helps startups and enterprises build quality software to achieve growth and scale.</p>
                </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-4 place-items-center">
                <CardService
                    cardClassName="shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out min-h-[300px]"
                    title={"Web development"}
                    description={"We specialise in crafting beautiful, high quality marketing pages. The rest of the website will be a shell that uses lorem ipsum everywhere."}
                    headerContent={<Terminal size={48} className="text-pink-500"/>}
                />

                <CardService
                    cardClassName="shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out min-h-[300px]"
                    title={"Application development"}
                    description={"We have a team of skilled developers who are experts in the latest app frameworks, like Next.js, Spring Boot."}
                    headerContent={<Braces size={48} className="text-pink-500"/>}
                />

                <CardService
                    cardClassName="shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out min-h-[300px]"
                    title={"Custom content management"}
                    description={"we understand the importance of having a robust and customised CMS. That’s why we run all of our client projects out of a single, enormous Joomla instance."}
                    headerContent={<AreaChart size={48} className="text-pink-500"/>}
                />
            </div>
        </section>
    )
}