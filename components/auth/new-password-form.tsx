"use client";

import {useForm} from "react-hook-form";
import * as z from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {NewPasswordSchema} from "@/schemas";
import {useState, useTransition} from "react";


import {CardWrapper} from "@/components/auth/card-wrapper";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {FormError} from "@/components/form-error";
import {FormSuccess} from "@/components/form-success";
import {useSearchParams} from "next/navigation";
import {newPassword} from "@/actions/new-password";

export const NewPasswordForm = () => {

    const searchParams = useSearchParams();
    const token = searchParams.get("token");



    const [isPending, startTransition] = useTransition();
    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");

    const form = useForm<z.infer<typeof NewPasswordSchema>>({
        resolver: zodResolver(NewPasswordSchema),
        defaultValues: {
            password: "",
        }
    });

    const onSubmit = (formData: z.infer<typeof NewPasswordSchema>) => {
        startTransition(() => {
            newPassword(formData, token)
                .then((data) => {
                    setError(data?.error);
                    setSuccess(data?.success);
                })
        })
    }

    return (
        <CardWrapper
            headerLabel="Enter your new password"
            backButtonLabel="Back to login"
            backButtonHref="/auth/login"
            showSocial={false}
        >
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className={"space-y-6"}
                >
                    <FormField
                        control={form.control}
                        name="password"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel htmlFor={"password"}>New Password</FormLabel>
                                <FormControl>
                                    <Input
                                        type="password"
                                        placeholder="******"
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
                        Reset Password
                    </Button>
                </form>
            </Form>
        </CardWrapper>
    )
}

