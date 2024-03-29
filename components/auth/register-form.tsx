"use client";

import {useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {RegisterSchema} from "@/schemas";
import {useState, useTransition} from "react";


import {CardWrapper} from "@/components/auth/card-wrapper";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {FormError} from "@/components/form-error";
import {FormSuccess} from "@/components/form-success";
import {register} from "@/actions/register";

export const RegisterForm = () => {

    const [isPending, startTransition] = useTransition();
    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");

    const form = useForm<z.infer<typeof RegisterSchema>>({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            email: "",
            password: "",
            name: ""
        }
    });

    const onSubmit = (formData: z.infer<typeof RegisterSchema>) => {
        startTransition(() => {
            register(formData)
                .then((data) => {
                    setError(data.error);
                    setSuccess(data.success);
                })
        })
    }

    return (
        <CardWrapper
            headerLabel="Create an account"
            backButtonLabel="Already have an account?"
            backButtonHref="/auth/login"
            showSocial={true}
        >
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className={"space-y-6"}
                >
                    <FormField
                        control={form.control}
                        name="name"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel htmlFor={"name"}>Name</FormLabel>
                                <FormControl>
                                    <Input
                                        type="name"
                                        placeholder="John Doe"
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
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <FormError
                        message={error}
                    />
                    <FormSuccess
                        message={success}
                    />
                    <Button
                        type={"submit"}
                        className={"w-full"}
                        disabled={isPending}
                    >
                        Create account
                    </Button>
                </form>
            </Form>
        </CardWrapper>
    )
}

