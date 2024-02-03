"use client"

import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import * as z from "zod"

import {Button} from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {Input} from "@/components/ui/input"
import {Textarea} from "@/components/ui/textarea";
import {Checkbox} from "@/components/ui/checkbox";
import Link from "next/link";
import {toast} from "@/components/ui/use-toast";
import {Label} from "@/components/ui/label";

const contactSchema = z.object({
    firstname: z.string().min(2, {message: "First name is too short"}).max(50, {message: "First name is too long"}),
    lastname: z.string().min(2, {message: "Last name is too short"}).max(50, {message: "Last name is too long"}),
    company: z.string().max(50, {message: "Company name is too long"}),
    message: z.string().min(25, {message: "Message is too short"}).max(500, {message: "Message is too long"}),
    terms: z.boolean().refine(value => value, {message: "You must agree to our privacy policy"}),
})

type ContactFormValues = z.infer<typeof contactSchema>

const defaultValues: ContactFormValues = {
    firstname: "",
    lastname: "",
    company: "",
    message: "",
    terms: false,
}
export const ContactForm = () => {
    const form = useForm<ContactFormValues>({
        resolver: zodResolver(contactSchema),
        defaultValues,
    })

    const onSubmit = (data: any) => {
        toast({
            title: "Thanks for your message!",
            description: (
            <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                 <code className="text-white">{JSON.stringify(data, null, 2)}</code>
            </pre>
            ),
        })
    }

    return (

        <>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="mx-auto mt-16 w-4/5 sm:mt-16 space-y-3">
                    <h2 className="font-bold tracking-tight sm:text-xl">Work inquires</h2>
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                        <FormField
                            control={form.control}
                            name="firstname"
                            render={({field, formState}) => (
                                <FormItem>
                                    <FormLabel htmlFor="firstname">First name</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="lastname"
                            render={({field, formState}) => (
                                <FormItem>
                                    <FormLabel htmlFor="lastname">Last name</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />

                        <div className="sm:col-span-2">
                            <FormField
                                control={form.control}
                                name="company"
                                render={({field, formState}) => (
                                    <FormItem>
                                        <FormLabel htmlFor="company">Company</FormLabel>
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                        </div>

                        <div className="sm:col-span-2">
                            <FormField
                                control={form.control}
                                name="message"
                                render={({field, formState}) => (
                                    <FormItem>
                                        <FormLabel htmlFor="message">Message</FormLabel>
                                        <FormControl>
                                            <Textarea placeholder="Type your message here." {...field} />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                        </div>

                        <div className="sm:col-span-2">
                            <FormField
                                control={form.control}
                                name="terms"
                                render={({field, formState}) => (
                                    <FormItem className="flex flex-row items-center space-x-2 space-y-0">
                                        <FormControl>
                                            <Checkbox
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                            />
                                        </FormControl>

                                        <Label htmlFor="terms" className="font-semibold leading-6">
                                            I agree with your{' '}
                                            <Link href={"/privacy-policy"}
                                                  className="font-extrabold underline underline-offset-4">
                                                privacy policy
                                            </Link>
                                        </Label>
                                        {/* <div className="space-x-1 leading-none items-center py-0">
                                            <Button asChild variant="link">
                                                <Link href={"/privacy-policy"}>
                                                    <p className="text-sm font-semibold leading-6">
                                                        I agree with your{' '}
                                                        <span className="font-extrabold underline underline-offset-4">privacy policy</span>
                                                    </p>
                                                </Link>
                                            </Button>

                                        </div>*/}
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                        </div>

                        <Button type="submit" variant="default" className="sm:col-span-2">
                            Let's talk
                        </Button>
                    </div>
                </form>
            </Form>
            {/*<form className="mx-auto mt-16 max-w-xl sm:mt-20">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div>
                        <label
                            htmlFor="firstName"
                            className="block text-sm font-semibold leading-6"
                        >
                            First name
                        </label>
                        <div className="mt-2.5">
                            <input
                                type="text"
                                name="firstName"
                                id="firstName"
                                autoComplete="given-name"
                                required
                                className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="lastName" className="block text-sm font-semibold leading-6">
                            Last name
                        </label>
                        <div className="mt-2.5">
                            <input
                                type="text"
                                name="lastName"
                                id="lastName"
                                autoComplete="family-name"
                                required
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="company" className="block text-sm font-semibold leading-6">
                            Company
                        </label>
                        <div className="mt-2.5">
                            <input
                                type="text"
                                name="company"
                                id="company"
                                autoComplete="organization"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="email" className="block text-sm font-semibold leading-6">
                            Email
                        </label>
                        <div className="mt-2.5">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                autoComplete="email"
                                required
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label
                            htmlFor="phoneNumber"
                            className="block text-sm font-semibold leading-6"
                        >
                            Phone number
                        </label>
                        <div className="relative mt-2.5">
                            <div className="absolute inset-y-0 left-0 flex items-center">
                                <label htmlFor="country" className="sr-only">
                                    Country
                                </label>
                                <select
                                    id="country"
                                    name="country"
                                    className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm"
                                >
                                    <option>US</option>
                                    <option>CA</option>
                                    <option>EU</option>
                                    <option>MX</option>
                                    <option>Other</option>
                                </select>
                                <svg
                                    className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                            <input
                                type="tel"
                                name="phoneNumber"
                                id="phoneNumber"
                                autoComplete="tel"
                                pattern="[0-9]*"
                                inputMode="numeric"
                                className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block text-sm font-semibold leading-6 ">
                            Message
                        </label>
                        <div className="mt-2.5">
                            <textarea
                                name="message"
                                id="message"
                                rows={4}
                                required
                                minLength={25}
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                            ></textarea>
                        </div>
                    </div>
                </div>
                <div className="mt-10">
                    <Button variant="default" className="w-full">
                        Let's talk
                    </Button>
                </div>
            </form>*/}

        </>
    )
}
