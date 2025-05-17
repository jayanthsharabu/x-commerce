'use server'
import { signInSchema } from "../validators";
import { getRedirectError } from "next/dist/client/components/redirect";
import { signIn, signOut } from "@/auth";

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