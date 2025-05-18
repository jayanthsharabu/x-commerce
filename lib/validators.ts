//schema for signing users in
import { z } from "zod";

export const signInSchema = z.object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(3, 'Password must be at least 3 characters long'),
});
export const signUpSchema = z.object({
    name: z.string().min(3, 'Name must be at least 3 characters long'),
    email: z.string().email('Invalid email address'),
    password: z.string().min(3, 'Password must be at least 3 characters long'),
    confirmPassword: z.string().min(3, 'Password must be at least 3 characters long'),
}).refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
});

export type SignInSchema = z.infer<typeof signInSchema>;
