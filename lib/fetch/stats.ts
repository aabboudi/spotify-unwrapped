import { getServerSideCookies } from "@/lib/cookies";

export async function getTopArtists() {
  let accessToken = getServerSideCookies("access_token");

  const response = await fetch("https://api.spotify.com/v1/me/top/artists", {
    headers: {
      Authorization: "Bearer " + accessToken
    }
  });

  const data = await response.json();
  return data;
}

interface TopTracksInterface {
  item_type?: "artists" | "tracks";
  time_range?: "short_term" | "medium_term" | "long_term";
  limit?: number;
  offset?: number;
}

export async function getTopItems(params?: TopTracksInterface) {
  const { item_type="tracks", time_range="medium_term", limit=10, offset=0 } = params || {};
  let accessToken = getServerSideCookies("access_token");

  const response = await fetch (`https://api.spotify.com/v1/me/top/${item_type}?time_range=${time_range}&limit=${limit}&offset=${offset}`, {
    headers: {
      Authorization: "Bearer " + accessToken
    }
  });

  const data = await response.json();
  return data;
}
