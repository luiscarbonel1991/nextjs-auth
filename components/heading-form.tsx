import {Mail} from "lucide-react";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {Icons} from "@/components/icons";
import SocialIcon from "@/components/social-icons";


export const HeadingForm = () => {
    return (
        <div className="mx-auto w-4/5 text-start">
            <h1 className="text-xl font-bold tracking-tight leading-10">
                Have an idea?
            </h1>
            <h2 className="text-3xl font-bold tracking-tight sm:text-6xl">Drop us a line!</h2>

            <p className="mt-2 text-lg leading-8">
                <Mail className="inline-block h-6 w-6 mr-2"/> contact@studio.com
            </p>

            <div className="mt-6 flex sm:flex-row gap-1">

                <Button  variant="outline" className="rounded-full hover:bg-green-500" size="icon">
                    <SocialIcon kind="whatsapp" size={6} href={"/"}/>
                </Button>
                <Button  variant="outline" className="rounded-full hover:bg-sky-500" size="icon">
                    <SocialIcon kind="telegram" size={6} href={"/"}/>
                </Button>
            </div>

        </div>
    );
}