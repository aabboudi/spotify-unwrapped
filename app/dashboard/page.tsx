"use server";

import { getProfile } from '@/lib/fetch/current';
import { getFlag } from '@/lib/utils';

export default async function Dashboard() {
  const profile = await getProfile();
  const flag = getFlag(profile.country);

  return (
    <div className="min-h-screen grid lg:grid-cols-3 justify-center pt-4">
      <div className="col-span-1 text-center">
        <h2 className="text-3xl font-semibold">Hello, {profile.display_name} {flag}!</h2>
      </div>
    </div>
  );
}
