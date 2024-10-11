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

interface SearchInterface {
  q: string;
  type: "album" | "artist" | "playlist" | "track" | "show" | "episode" | "audiobook";
  market?: string;
  limit?: number;
  offset?: number;
  include_external?: "audio";
}

export async function searchItem({ q, type, limit=1, offset=0 }: SearchInterface) {
  let accessToken = getServerSideCookies("access_token");

  const query = new URLSearchParams({
    q,
    type,
    limit: limit.toString(),
    offset: offset.toString(),
  }).toString();

  const response = await fetch(`https://api.spotify.com/v1/search?q=${query}`,{
    headers: {
      Authorization: 'Bearer ' + accessToken
    }
  });

  const data = await response.json();
  return data;
}
