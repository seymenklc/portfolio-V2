import useSWR from 'swr';

const fetcher = async (url: string) => {
   return await (await fetch(url)).json();
};

export default function CurrentlyPlaying() {
   const { data } = useSWR('/api/spotify', fetcher);

   return (
      <div>index</div>
   );
}