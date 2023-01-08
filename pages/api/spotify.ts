import querystring from 'querystring';
import { SpotifyResponse } from '@/types/spotify';
import { NextApiRequest, NextApiResponse } from 'next';

const {
   SPOTIFY_CLIENT_ID: client_id,
   SPOTIFY_CLIENT_SECRET: client_secret,
   SPOTIFY_REFRESH_TOKEN: refresh_token,
} = process.env as { [key: string]: string; };

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');

const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const getAccessToken = async () => {
   const response = await fetch(TOKEN_ENDPOINT, {
      method: 'POST',
      headers: {
         Authorization: `Basic ${basic}`,
         'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: querystring.stringify({
         grant_type: 'refresh_token',
         refresh_token,
      })
   });

   return response.json() as Promise<{ access_token: string; }>;
};

export const getNowPlaying = async () => {
   const { access_token } = await getAccessToken();

   return fetch(NOW_PLAYING_ENDPOINT, {
      headers: {
         Authorization: `Bearer ${access_token}`,
      }
   });
};

export default async function getCurrentlyPlaying(_: NextApiRequest, res: NextApiResponse) {
   const response = await getNowPlaying();

   if (response.status === 204 || response.status > 400) {
      return res.status(200).json({ isPlaying: false });
   }

   const { is_playing, item }: SpotifyResponse = await response.json();

   const songData = {
      isPlaying: is_playing,
      title: item.name,
      album: item.album.name,
      albumImageUrl: item.album.images[0].url,
      songUrl: item.external_urls.spotify,
      artist: item.artists.map(a => a.name).join(', '),
   };

   return res.status(200).json(songData);
};