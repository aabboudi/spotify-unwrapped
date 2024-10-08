"use client";

import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function Login() {
  const { data: session } = useSession();
  const router = useRouter();

  if (session) {
    router.push('/dashboard');
  }

  return (
    <main className="min-h-[90vh] grid lg:grid-cols-2 justify-center items-center gap-8">
      <section className="h-full grid justify-center items-center bg-green-900">
        <Image
          src="/spotify-player.png"
          alt="MongoDB Logo"
          width={500}
          height={500}
          className="drop-shadow-lg"
        />
      </section>
      <section className="grid gap-8">
        <h1 className="text-3xl font-bold">Check your Spotify Wrapped today</h1>
        <p>Go through your stats, create playlists using AI, and more...</p>
        <Button className="w-fit" onClick={() => signIn('spotify')}>Login with Spotify</Button>
      </section>
    </main>
  );
}
