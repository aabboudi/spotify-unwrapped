import { getServerSideCookies } from "@/lib/cookies";

interface PlaylistInterface {
  limit?: number;
  offset?: number;
}

export async function getPlaylists(params?: PlaylistInterface) {
  const { limit=50, offset=0 } = params || {};
  let accessToken = getServerSideCookies("access_token");

  const response = await fetch(`https://api.spotify.com/v1/me/playlists?offset=${offset}&limit=${limit}`, {
    headers: {
      Authorization: 'Bearer ' + accessToken
    }
  });

  const data = await response.json();
  return data;
}
