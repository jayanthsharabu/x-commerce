import CredentialsSignInForm from "./credentials-signin-form";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CardTitle, Card, CardDescription, CardHeader, CardContent } from "@/components/ui/card";
import { redirect } from "next/navigation";
import { auth } from "@/auth";

export const metadata : Metadata = {
    title: 'Sign In',
    description: 'Sign in to your account',
}

const SignInPage = async () => {
    const session = await auth();
    if (session) {
        redirect('/');
    }
    return ( <div className="w-full max-w-md mx-auto">
        <Card>
            <CardHeader className="space-y-4 ">
                <Link href="/" className='flex items-center justify-center'>
                <Image   src="/images/logo.svg" alt="x-commerce" width={150} height={150} priority = {true} className="w-10 h-10" />
                </Link>
                <CardTitle className="text-2xl font-bold text-center">Sign In</CardTitle>
                <CardDescription className="text-center">
                    Sign in to your account to continue
                </CardDescription>
            </CardHeader>
            <CardContent>
                <CredentialsSignInForm />
            </CardContent>
        </Card>
    </div> );
}
 
export default SignInPage;