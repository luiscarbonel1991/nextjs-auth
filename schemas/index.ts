import * as z from 'zod';

export const NewPasswordSchema = z.object({
    password: z.string().min(6, {
        message: "Minimum of 6 characters required"
    }),
});


export const ResetSchema = z.object({
    email: z.string().email({
        message: "Please enter a valid email address"
    }),
});

export const LoginSchema = z.object({
    email: z.string().email({
        message: "Please enter a valid email address"
    }),
    password: z.string().min(1, {
        message: "Please enter a password"
    }),
    code: z.optional(z.string())
});


export const RegisterSchema = z.object({
    email: z.string().email({
        message: "Please enter a valid email address"
    }),
    password: z.string().min(6, {
        message: "Must be at least 6 characters long"
    }),
    name: z.string().min(1, {
        message: "Please enter a name"
    })
});
