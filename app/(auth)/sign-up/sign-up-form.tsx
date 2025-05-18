'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SIGNUP_DEFAULT_VALUES } from "@/lib/constants";
import Link from "next/link";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { signUpUser } from "@/lib/actions/user.actions";
import { useSearchParams } from "next/navigation";

const SignUpForm = () => {
    const [data, action] = useActionState(signUpUser, {success: false, message: ''});
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get('callbackUrl') || '/';
    const SignUpButton = () => {
        const { pending } = useFormStatus();
        return (
            <Button disabled = {pending} className="w-full " variant="default">
                {pending ? "Signing Un..." : "Sign Up"}
            </Button>
            
        )
    }
    return ( 
        <form action={action}>
            <input type="hidden" name="callbackUrl" value={callbackUrl} />
            <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name"
                 name="name"
                  type="text"
                   placeholder="Enter your name" 
                    autoComplete="name" 
                   defaultValue={SIGNUP_DEFAULT_VALUES.name} />
            </div>
                <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email"
                     name="email"
                      type="text"
                       placeholder="Enter your email" 
                    autoComplete="email" 
                       defaultValue={SIGNUP_DEFAULT_VALUES.email} />
                </div>
                    <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password"
                        name="password"
                        type="password"
                        placeholder="Enter your password" 
                        required
                        autoComplete="password"
                        defaultValue={SIGNUP_DEFAULT_VALUES.password} />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="confirmPassword">Confirm Password</Label>
                        <Input id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        placeholder="Confirm your password" 
                        required
                        autoComplete="confirmPassword"
                        defaultValue={SIGNUP_DEFAULT_VALUES.confirmPassword} />
                    </div>
                    <SignUpButton />
                
                {data && !data.success && (
                    <div className="text-center text-destructive">
                        {data.message}
                        </div>
                )}
                <div className="text-center text-sm text-muted-foreground">
                    Already have an account?{' '}
                    <Link href="/sign-In" className="text-primary hover:underline" target="_self">Sign-In</Link>
                </div>
        </form>
     );
}
 
export default SignUpForm;