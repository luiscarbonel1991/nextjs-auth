'user client';

import { signIn } from "next-auth/react";

import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { useSearchParams } from "next/navigation";


export const Social = () => {
    const searchParams = useSearchParams();
    const callBackUrl = searchParams.get("callbackUrl") || DEFAULT_LOGIN_REDIRECT;

    const handleSocialLogin = (provider: "google") => {
        signIn(provider, {
            callBackUrl
        })
    }

    return (
        <div className="flex items-center w-full">
            <Button
                size={"lg"}
                className={"w-full"}
                variant={"outline"}
                onClick={() => handleSocialLogin('google')}
            >
                <FcGoogle className="inline-block h-6 w-6 mr-2" />
            </Button>
        </div>
    );
}