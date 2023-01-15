import { Fragment } from 'react';
// next
import useSWR from 'swr';
import Link from 'next/link';
import Image from 'next/image';
// chakra
import { Box, Spinner, Text, useColorModeValue } from '@chakra-ui/react';
// assets
import Spotify from '@/public/icons/spotify.svg';
// types
import { ICurrentlyPlaying } from '@/types/spotify';
// utils
import { truncateOverview, fetcher } from '@/src/utils';

export default function CurrentlyPlaying() {
   const { data: song, isLoading } = useSWR<ICurrentlyPlaying>('/api/currentTrack', fetcher);

   const textColor = useColorModeValue('gray.800', 'gray.400');
   const bgColor = useColorModeValue('hover:bg-slate-300', 'hover:bg-slate-800');

   return (
      <Box className={`flex gap-3 p-3 transition-all duration-300 rounded-md w-max ${bgColor}`}>
         {!song?.isPlaying ? (
            <span className='p-1 bg-black rounded-xl'>
               <Spotify />
            </span>
         ) : (
            <Image
               alt='album cover'
               width={50}
               height={50}
               className='rounded-md'
               src={song?.albumImageUrl as string}
            />
         )}
         <div className='flex flex-col justify-center'>
            {isLoading && <Spinner />}
            {song?.isPlaying && (
               <Fragment>
                  <Text color={textColor} className="text-sm cursor-default">
                     Now Playing
                  </Text>
                  <Box
                     as={Link}
                     rel="noreferrer"
                     target='_blank'
                     href={song.songUrl}
                     className='flex items-center gap-2 text-sm font-semibold cursor-pointer hover:underline'
                  >
                     <Text color={textColor}>
                        {truncateOverview(song.artist, 20)}
                     </Text>
                     <Text>
                        {truncateOverview(song.title, 20)}
                     </Text>
                  </Box>
               </Fragment>
            )}
            {!song?.isPlaying && !isLoading && (
               <Text color={textColor} className="text-xs cursor-default">
                  Not Playing - Spotify
               </Text>
            )}
         </div>
      </Box>
   );
}