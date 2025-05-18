'use server'
import { signInSchema, signUpSchema } from "../validators";
import { signIn, signOut } from "@/auth";
import { hashSync } from "bcrypt-ts-edge";
import prisma  from "@/db/prisma";
import { sign } from "node:crypto";
import { formatError } from "../utils";

export async function signInWithCredentials(prevState: unknown, formData: FormData) {
    try {
        const user = signInSchema.parse({
            email: formData.get('email'),
            password: formData.get('password'),
        }
        );
        await signIn('credentials', user);
        return {success: true, message: 'Signed in successfully'};
    }
    catch (error) {
        if (error instanceof Error && error.message === 'NEXT_REDIRECT') {
            throw error;
        }
        return {success: false, message: 'Invalid credentials'};
        
    }
}
export async function signOutUser(){
    await signOut();
}

export async function signUpUser(prevState: unknown, formData: FormData){
    try {
        const user = signUpSchema.parse({
            name: formData.get('name'),
            email: formData.get('email'),
            password: formData.get('password'),
            confirmPassword: formData.get('confirmPassword'),
        });
        const plainPassword = user.password;
        user.password = hashSync(user.password);
        await prisma.user.create({
            data: {
                name: user.name,
                email: user.email,
                password: user.password,
            }
        });
        await signIn('credentials', {
            email: user.email,
            password: plainPassword,
        });
        return {success: true, message: 'User registered successfully'};
    }
    catch (error) {
        
        if (error instanceof Error && error.message === 'NEXT_REDIRECT') {
            throw error;
        }
        return {success: false, message: formatError(error)};
    }
}