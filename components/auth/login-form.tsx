"use client";

import {useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {LoginSchema} from "@/schemas";
import {useState, useTransition} from "react";


import {CardWrapper} from "@/components/auth/card-wrapper";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {FormError} from "@/components/form-error";
import {FormSuccess} from "@/components/form-success";
import {login} from "@/actions/login";
import {useSearchParams} from "next/navigation";
import Link from "next/link";

export const LoginForm = () => {

    const searchParams = useSearchParams();

    const urlError = searchParams.get("error") === "OAuthAccountNotLinked"
        ? "Email already in use. Please login with a different provider."
        : "";


    const [showTwoFactor, setShowTwoFactor] = useState<boolean>(false);
    const [isPending, startTransition] = useTransition();
    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");

    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    });

    const onSubmit = (formData: z.infer<typeof LoginSchema>) => {
        setError("");
        setSuccess("");

        startTransition(() => {
            login(formData)
                .then((data) => {
                    if (data?.error) {
                        form.reset();
                        setError(data.error);
                    }

                    if (data?.success) {
                        form.reset();
                        setSuccess(data.success);
                    }

                    if (data?.twoFactor) {
                        setShowTwoFactor(true);
                    }
                }).catch((error) => {
                    console.log(error);
                    setError("Something went wrong. Please try again.");
                }
            )
        })
    }

    return (
        <CardWrapper
            headerLabel="Welcome Back"
            backButtonLabel="Don't have an account?"
            backButtonHref="/auth/register"
            showSocial={true}
        >
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className={"space-y-6"}
                >
                    { showTwoFactor && (
                        <FormField
                            control={form.control}
                            name="code"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel htmlFor={"code"}>Two Factor Code</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="123456789"
                                            {...field}
                                            disabled={isPending}
                                        />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                    )}
                    {!showTwoFactor && (
                        <>
                            <FormField
                                control={form.control}
                                name="email"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel htmlFor={"email"}>Email</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="email"
                                                placeholder="john.doe@example.com"
                                                {...field}
                                                disabled={isPending}
                                            />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="password"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel htmlFor={"password"}>Password</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="password"
                                                placeholder="********"
                                                {...field}
                                                disabled={isPending}
                                            />
                                        </FormControl>
                                        <Button size={"sm"} variant={"link"} asChild className="px-0 font-normal">
                                            <Link href={"/auth/reset"}>
                                                Forgot Password?
                                            </Link>
                                        </Button>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                        </>
                       )
                    }
                    <FormError
                        message={error || urlError}
                    />
                    <FormSuccess
                        message={success}
                    />
                    <Button
                        type={"submit"}
                        className={"w-full"}
                        disabled={isPending}
                    >
                        {showTwoFactor ? "Verify Code" : "Login"}
                    </Button>
                </form>
            </Form>
        </CardWrapper>
    )
}

