import useSWR from 'swr';
import Link from 'next/link';
import { Fragment } from 'react';
import { Box, Text, useColorModeValue } from '@chakra-ui/react';
// assets
import Spotify from '@/public/icons/spotify.svg';
// types
import { ICurrentlyPlaying } from '@/types/spotify';

const fetcher = async (url: string) => {
   return await (await fetch(url)).json();
};

export default function CurrentlyPlaying() {
   const { data: song, isLoading } = useSWR<ICurrentlyPlaying>('/api/spotify', fetcher);

   const textColor = useColorModeValue('gray.800', 'gray.400');
   const bgColor = useColorModeValue('hover:bg-slate-300', 'hover:bg-slate-800');

   return (
      <Box className={`flex gap-3 p-3 transition-all duration-300 rounded-md w-max ${bgColor}`}>
         <span className='p-1 bg-black rounded-xl'>
            <Spotify />
         </span>
         <div className='flex flex-col justify-center'>
            {isLoading && <Text className='text-sm'>Loading...</Text>}
            {song?.isPlaying && (
               <Fragment>
                  <Text color={textColor} className="text-sm cursor-default">
                     Now Playing
                  </Text>
                  <Text
                     as={Link}
                     rel="noreferrer"
                     target='_blank'
                     href={song.songUrl}
                     className="text-sm font-semibold cursor-pointer hover:underline"
                  >
                     {song.title}
                  </Text>
               </Fragment>
            )}
            {!song?.isPlaying && !isLoading && (
               <Text color={textColor} className="text-sm cursor-default">
                  Not Playing - Spotify
               </Text>
            )}
         </div>
      </Box>
   );
}