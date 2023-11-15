import GoogleProvider from "next-auth/providers/google";

export const options = {
    providers: [
        GoogleProvider({
            profile(profile) {

                let userRole = "Google User"
            

                return {
                    ...profile,
                    id: profile.sub,
                    role: userRole,
                };
            },
            clientId: process.env.GOOGLE_ID!,
            clientSecret: process.env.GOOGLE_SECRET!,
        }),
    ],
    callbacks: {
        async jwt({token, user}) {
            if (user) {
                token.role = user.role
            }
            return token
        },
        async session({session, token}) {
            if (session?.user) {
                session.user.role = token.role 
            }
            return session
        }
    }
}