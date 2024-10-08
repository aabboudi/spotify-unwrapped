import { NextResponse } from 'next/server';
import axios from 'axios';

const handler = async (req: Request) => {
  const { searchParams } = new URL(req.url);
  const error = searchParams.get('error');
  const code = searchParams.get('code');

  // callback error
  if (error) {
    return NextResponse.json({ error }, { status: 400 });
  }

  if (code) {
    // params to exchange code for tokens
    const reqBody = {
      code: code,
      grant_type: 'authorization_code',
      redirect_uri: process.env.NEXTAUTH_URL + '/api/auth/callback',
      client_id: process.env.SPOTIFY_CLIENT_ID!,
      client_secret: process.env.SPOTIFY_CLIENT_SECRET!,
    };

    try {
      const response = await axios.post('https://accounts.spotify.com/api/token', new URLSearchParams(reqBody));
      const tokenInfo = response.data;

      // handle session mgmt: store access and refresh tokens in session

      // redirect to dashboard on status 200
      return NextResponse.redirect(new URL('/dashboard', req.url));
    } catch (err) {
      console.error('Error exchanging code for tokens:', err);
      return NextResponse.json({ error: 'Failed to exchange code for tokens' }, { status: 500 });
    }
  }

  return NextResponse.json({ error: 'Missing code parameter' }, { status: 400 });
};

export { handler as GET, handler as POST };
