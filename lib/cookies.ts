import { cookies } from 'next/headers';

export function getServerSideCookies(cookieName: string) {
  const cookieStore = cookies();
  const myCookie = cookieStore.get(cookieName);
  return myCookie?.value;
}

export function isAuthenticated() {
  const cookie = getServerSideCookies("access_token");
  return !!cookie;
}
