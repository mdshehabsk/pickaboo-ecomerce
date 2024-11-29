import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import { NextAuthOptions } from "next-auth";

const config = {
  googleClientId: process.env.GOOGLE_CLIENT_ID as string,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET as string,

  facebookClientId: process.env.FACEBOOK_CLIENT_ID as string,
  facebookClientSecret: process.env.FACEBOOK_CLIENT_SECRET as string,

  nextAuthSecret: process.env.NEXTAUTH_SECRET,
};

export const authOptions: NextAuthOptions = {
    // Configure one or more authentication providers
    providers: [
      GoogleProvider({
        clientId: config.googleClientId,
        clientSecret: config.googleClientSecret,
      }),
      FacebookProvider({
        clientId: config.facebookClientId,
        clientSecret: config.facebookClientSecret,
      }),
    ],
    secret: config.nextAuthSecret,
    callbacks: {
      async signIn({ user, account }) {
        const token = account?.provider === "google" && account.id_token;
      
        
        return true;
      },
    },
  };