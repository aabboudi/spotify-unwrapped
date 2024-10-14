import { getServerSideCookies } from "@/lib/cookies";

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
