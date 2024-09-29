import NextAuth from "next-auth/next";
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import Auth0Provider from 'next-auth/providers/auth0';
import LinkedInProvider from "next-auth/providers/linkedin";
import InstagramProvider from "next-auth/providers/instagram";
import DiscordProvider from "next-auth/providers/discord";

const authOptions =({
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID! as string,
            clientSecret: process.env.GITHUB_SECRET! as string

        }), 
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID! as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET! as string

        }),
        LinkedInProvider({
            clientId: process.env.LINKEDIN_CLIENT_ID! as string,
            clientSecret: process.env.LINKEDIN_CLIENT_SECRET! as string

        }), 
        InstagramProvider({
            clientId: process.env.INSTAGRAM_CLIENT_ID! as string,
            clientSecret: process.env.INSTAGRAM_CLIENT_SECRET! as string

        }), 
        DiscordProvider({
            clientId: process.env.DISCORD_CLIENT_ID! as string,
            clientSecret: process.env.DISCORD_CLIENT_SECRET! as string

        }), 
        Auth0Provider({
            clientId: process.env.AUTH0_CLIENT_ID! as string,
            clientSecret: process.env.AUTH0_CLIENT_SECRET! as string,
            issuer: process.env.AUTH0_ISSUER

        }),

    ],
    secret: process.env.NEXTAUTH_SECRET,

})
const handler = NextAuth(authOptions)
export { handler as GET, handler as POST };