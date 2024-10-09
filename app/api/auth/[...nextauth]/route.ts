import NextAuth from 'next-auth';
import SpotifyProvider from 'next-auth/providers/spotify';

const scope = [
  "user-read-email",
  "user-read-private",
  "playlist-read-private",
  "playlist-read-collaborative",
  "user-read-currently-playing",
  "user-modify-playback-state",
  "user-top-read",
  "user-read-recently-played",
].join(",");

const handler = NextAuth({
  providers: [
    SpotifyProvider({
      clientId: process.env.SPOTIFY_CLIENT_ID!,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET!,
      authorization: {
        params: {
          scope: scope,
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
