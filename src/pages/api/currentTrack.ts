import { SpotifyResponse } from '@/types/spotify';
import { NextApiRequest, NextApiResponse } from 'next';
import { BASE_URL, getAccessToken, } from '@/src/utils/spotify';

export const getNowPlaying = async () => {
   const { access_token } = await getAccessToken();

   return fetch(BASE_URL + '/player/currently-playing', {
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

   const song: SpotifyResponse = await response.json();

   if (song) {
      const { item, is_playing } = song;

      const songData = {
         isPlaying: is_playing,
         title: item?.name,
         album: item?.album.name,
         albumImageUrl: item?.album.images[0].url,
         songUrl: item?.external_urls.spotify,
         artist: item?.artists.map(a => a.name).join(', '),
      };

      return res.status(200).json(songData);
   }
};