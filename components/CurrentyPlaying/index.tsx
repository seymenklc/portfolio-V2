import useSWR from 'swr';
import { Fragment } from 'react';
import { ICurrentlyPlaying } from '@/types/spotify';
// assets
import Spotify from '@/public/icons/spotify.svg';

const fetcher = async (url: string) => {
   return await (await fetch(url)).json();
};

export default function CurrentlyPlaying() {
   const { data: song, isLoading } = useSWR<ICurrentlyPlaying>('/api/spotify', fetcher);

   return (
      <div className="flex gap-3 p-3 transition-all duration-300 rounded-md w-max hover:bg-slate-800">
         <span className='p-1 bg-black rounded-xl'>
            <Spotify />
         </span>
         <div className='flex flex-col justify-center'>
            {isLoading && <p className='text-sm'>Loading...</p>}
            {song?.isPlaying && (
               <Fragment>
                  <span className="text-sm text-gray-400 cursor-default">
                     Now Playing
                  </span>
                  <span className="text-sm font-semibold cursor-pointer hover:underline">
                     <a href={song.songUrl} target='_blank' rel="noreferrer">
                        {song.title}
                     </a>
                  </span>
               </Fragment>
            )}
            {!song?.isPlaying && !isLoading && (
               <span className="text-sm text-gray-400 cursor-default">
                  Not Playing - Spotify
               </span>
            )}
         </div>
      </div>
   );
}