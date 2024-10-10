"use server";

import { getProfile } from '@/lib/fetch/current';
import { getTopItems } from '@/lib/fetch/stats';
import { getFlag } from '@/lib/utils';

import Image from 'next/image';
import Link from 'next/link';

export default async function Dashboard() {
  const profile = await getProfile();
  const flag = getFlag(profile.country);
  const topTracks = await getTopItems();

  console.log(topTracks.items[0].album.images[0])

  return (
    <div className="min-h-screen grid lg:grid-cols-3 justify-center pt-4">
      <div className="col-span-1 text-center">
        <h2 className="text-3xl font-semibold">Hello, {profile.display_name} {flag}!</h2>
      </div>
      <div>
        <h3 className='text-xl'>Top 10 Playlists</h3>
        {topTracks?.items?.map((track: any, index: number) => (
          <Link className="flex gap-4 my-4 items-center hover:underline" href="#" key={index}>
            <Image
              alt="Playlist image"
              src={track.album.images[0].url}
              width={50}
              height={50}
            />
            <div>
              <h4 className="text-xl">{track.name}</h4>
              {/* <p className="text-sm">{track.album.images[0].url}</p> */}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
