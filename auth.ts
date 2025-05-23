
import NextAuth from "next-auth";
import {PrismaAdapter} from '@auth/prisma-adapter'
import prisma from '@/db/prisma'
import CredentialsProvider from "next-auth/providers/credentials";
import { compareSync } from "bcrypt-ts-edge";
import type { NextAuthConfig } from "next-auth";


export const config = {
    pages: {
        signIn: "/sign-in",
        error: "/sign-in",
    },
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60,
    },
    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
            credentials: {
                email: {label: 'Email', type: 'email', placeholder: 'jsmith@example.com'},
                password: {label: 'Password', type: 'password'},
            },
            async authorize(credentials) {
                if (credentials == null) return null;
                const user = await prisma.user.findFirst({
                    where:{
                        email: credentials.email as string,
                    }
                });
                if (user && user.password) {
                    const isMatch = compareSync(credentials.password as string, user.password);
                    if (isMatch) {
                        return{
                            id: user.id.toString(),
                            email: user.email,
                            name: user.name,
                            role: user.role,
                        };
                    }
                }
                return null;
            },
        }),
    ],
    callbacks: {
        async session({session, user, trigger, token} : any) {
            
            session.user.id = token.sub;
            session.user.role = token.role;
            session.user.name = token.name;

            console.log(session);
            if (trigger === 'update') {
                session.user.name = user.name;
            }
            return session;
        },
        async jwt({token, user, account, profile, isNewUser} : any) {
            if (user) {
                token.sub = user.id;
            }
            return token;
        },
    },

} satisfies NextAuthConfig;

export const {handlers, auth, signIn, signOut} = NextAuth(config);