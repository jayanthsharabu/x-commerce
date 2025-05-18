import SignUpForm from "./sign-up-form";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CardTitle, Card, CardDescription, CardHeader, CardContent } from "@/components/ui/card";
import { redirect } from "next/navigation";
import { auth } from "@/auth";

export const metadata : Metadata = {
    title: 'Sign Up',
    description: 'Sign up your account',
}

const SignUpPage = async (props: {searchParams: Promise<{callbackUrl?: string}>}) => {
    const session = await auth();
    const {callbackUrl} = await props.searchParams;
    if (session) {
        redirect(callbackUrl || '/');
    }
    return ( <div className="w-full max-w-md mx-auto">
        <Card>
            <CardHeader className="space-y-4 ">
                <Link href="/" className='flex items-center justify-center'>
                <Image   src="/images/logo.svg" alt="x-commerce" width={150} height={150} priority = {true} className="w-10 h-10" />
                </Link>
                <CardTitle className="text-2xl font-bold text-center">Create User Account</CardTitle>
                <CardDescription className="text-center">
                    Enter ur info below to create an account
                </CardDescription>
            </CardHeader>
            <CardContent><SignUpForm /></CardContent>
        </Card>
    </div> );
}
 
export default SignUpPage;