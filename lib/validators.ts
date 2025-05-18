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
});

export type SignInSchema = z.infer<typeof signInSchema>;
