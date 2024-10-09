import { getServerSideCookies } from "@/lib/cookies";

export async function getTopArtists() {
  let accessToken = getServerSideCookies("access_token");

  const response = await fetch('https://api.spotify.com/v1/me/top/artists', {
    headers: {
      Authorization: 'Bearer ' + accessToken
    }
  });

  const data = await response.json();
  return data;
}
