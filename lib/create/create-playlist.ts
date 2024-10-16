import { getServerSideCookies } from "@/lib/cookies";
import { searchItem } from "../fetch/items";

interface CreatePlaylistBodyInterface {
  name: string,
  description: string,
  public: boolean
}

async function createPlaylist(user: string, body: CreatePlaylistBodyInterface) {
  let accessToken = getServerSideCookies("access_token");

  const response = await fetch(`https://api.spotify.com/v1/users/${user}/playlists`, {
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + accessToken,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  const data = await response.json();
  return data;
}

async function getTrackID(song: string, artist: string): Promise<string> {
  const searchResult = await searchItem({
    q: `${song} ${artist}`,
    type: 'track'
  });

  return searchResult.tracks.items[0].id;
}
