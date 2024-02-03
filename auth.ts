import NextAuth, { NextAuthConfig } from "next-auth";
import authConfig from "./auth.config";

import { PrismaAdapter } from "@auth/prisma-adapter"
import { db } from "@/lib/db";
import { getUserById } from "./data/user";
import { UserRole } from "@prisma/client";
import {getTwoFactorConfirmationByUserId} from "@/data/two-factor-confirmation";
import {getAccountByUserId} from "@/data/account";


export const config = {
  pages: {
    signIn: "/auth/login",
    error: "/auth/error",
  },
  events: {
    async linkAccount({ user }) {
      await db.user.update({
        where: { id: user.id },
        data: { emailVerified: new Date() }
      })
    }
  },
  callbacks: {
    async signIn({  user, account}){
      // Allow OAuth Signing without email verification
      if( account?.provider !== "credentials") return true;
      
      const existingUser = await getUserById(user.id);

      // Prevent sign in if user is not verified
      if(!existingUser?.emailVerified) return false;

      if(existingUser.isTwoFactorEnabled) {

        const twoFactorConfirmation = await getTwoFactorConfirmationByUserId(existingUser.id);

        if(!twoFactorConfirmation) return false;

        // Delete two-factor confirmation for next login.
        await db.twoFactorConfirmation.delete({
          where: {
            id: twoFactorConfirmation.id,
          }
        });
      }

      return true
    },
    async session({ session, token }) {
      if (token.sub && session.user) {
        session.user.id = token.sub
      }

      if(token.role && session.user) {
        session.user.role = token.role as UserRole;
      }

      return session
    },
    async jwt({ token }) {

      console.log('jwt', token)

      if(!token.sub) return token;

      const existingUser = await getUserById(token.sub);

      if(!existingUser) return token;

      const existingAccount = await getAccountByUserId(
          existingUser.id
      );

      token.isOAuth = !!existingAccount;
      token.name = existingUser.name;
      token.email = existingUser.email;
      token.role = existingUser.role;
      token.isTwoFactorEnabled = existingUser.isTwoFactorEnabled;

      return token
    }
  },
  adapter: PrismaAdapter(db),
  secret: process.env.AUTH_SECRET!,
  session: {
    strategy: 'jwt',
  },
  ...authConfig,
} satisfies NextAuthConfig

export const { handlers, auth, signIn, signOut } = NextAuth(config)