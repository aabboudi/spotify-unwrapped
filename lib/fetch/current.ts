import { getServerSideCookies } from "@/lib/cookies";

export async function getPlaying() {
  let accessToken = getServerSideCookies("access_token");

  const response = await fetch('https://api.spotify.com/v1/me/player/recently-played', {
    headers: {
      Authorization: 'Bearer ' + accessToken
    }
  });

  const data = await response.json();
  return data;
}

export async function getProfile() {
  let accessToken = getServerSideCookies("access_token");

  const response = await fetch('https://api.spotify.com/v1/me', {
    headers: {
      Authorization: 'Bearer ' + accessToken
    }
  });

  const data = await response.json();
  return data;
}
