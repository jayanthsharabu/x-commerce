'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SIGNIN_DEFAULT_VALUES } from "@/lib/constants";
import Link from "next/link";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { signInWithCredentials } from "@/lib/actions/user.actions";
import { useSearchParams } from "next/navigation";

const CredentialsSignInForm = () => {
    const [data, action] = useActionState(signInWithCredentials, {success: false, message: ''});
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get('callbackUrl') || '/';
    const SignInButton = () => {
        const { pending } = useFormStatus();
        return (
            <Button disabled = {pending} className="w-full " variant="default">
                {pending ? "Signing In..." : "Sign In"}
            </Button>
            
        )
    }
    return ( 
        <form action={action}>
            <input type="hidden" name="callbackUrl" value={callbackUrl} />
                <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email"
                     name="email"
                      type="email"
                       placeholder="Enter your email" 
                       required autoComplete="email" 
                       defaultValue={SIGNIN_DEFAULT_VALUES.email} />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password"
                     name="password"
                      type="password"
                       placeholder="Enter your password" 
                       required
                       autoComplete="password"
                       defaultValue={SIGNIN_DEFAULT_VALUES.password} />
                <SignInButton />
                </div>
                {data && !data.success && (
                    <div className="text-center text-destructive">
                        {data.message}
                        </div>
                )}
                <div className="text-center text-sm text-muted-foreground">
                    Dont have an account?{' '}
                    <Link href="/sign-up" className="text-primary hover:underline" target="_self">Sign Up</Link>
                </div>
        </form>
     );
}
 
export default CredentialsSignInForm;