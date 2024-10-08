import NextAuth from 'next-auth';
import SpotifyProvider from 'next-auth/providers/spotify';

const handler = NextAuth({
  providers: [
    SpotifyProvider({
      clientId: process.env.SPOTIFY_CLIENT_ID!,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET!,
      authorization: {
        params: {
          scope: 'user-read-email user-read-private', // read only scope
          redirect_uri: process.env.NEXTAUTH_URL! + '/api/auth/callback',
        },
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET!,
  callbacks: {
    async redirect({ url, baseUrl }) {
      return baseUrl + '/dashboard'; // post callback redirect
    },
  },
});

export { handler as GET, handler as POST };
