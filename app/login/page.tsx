"use client";

import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function Login() {
  const { data: session } = useSession();
  const router = useRouter();

  if (session) {
    router.push('/dashboard');
  }

  return (
    <main>
      <button onClick={() => signIn('spotify')}>Login with Spotify</button>
    </main>
  );
}
