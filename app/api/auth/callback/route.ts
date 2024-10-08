import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

const handler = async (req: NextRequest) => {
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

      // handle session management
      // TODO: move refresh token to database
      const accessToken = tokenInfo.access_token;
      const refreshToken = tokenInfo.refresh_token;

      // redirect to dashboard on status 200
      const res = NextResponse.redirect(new URL('/dashboard', req.url));
      res.cookies.set('access_token', accessToken, {
        httpOnly: true, // Prevent client-side access
        secure: process.env.NODE_ENV === 'production', // Use secure cookie in production
        sameSite: 'lax', // Cookies are only sent on same-site requests and top-level navigations (not cross-site redirects).
        path: '/', // Available across the entire app
        maxAge: 60 * 60, // 1 hour
      });
      res.cookies.set('refresh_token', refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/',
        maxAge: 60 * 60 * 24 * 30, // 30 days
      });

      return res;
    } catch (err) {
      console.error('Error exchanging code for tokens:', err);
      return NextResponse.json({ error: 'Failed to exchange code for tokens' }, { status: 500 });
    }
  }

  return NextResponse.json({ error: 'Missing code parameter' }, { status: 400 });
};

export { handler as GET, handler as POST };
