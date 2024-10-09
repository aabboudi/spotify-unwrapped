import { getServerSideCookies } from "@/lib/cookies";

export async function getPlaylists() {
  let accessToken = getServerSideCookies("access_token");

  const response = await fetch('https://api.spotify.com/v1/me/playlists', {
    headers: {
      Authorization: 'Bearer ' + accessToken
    }
  });

  const data = await response.json();
  return data;
}
