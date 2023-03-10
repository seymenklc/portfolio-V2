import useSwr from 'swr';
import Lottie from 'lottie-react';
// Components
import Stats from '@/src/components/Dashboard/Stats';
import Loader from '@/src/components/Dashboard/Loader';
import HeadingSection from '@/src/components/HeadingSection';
// Types
import { IGithubUser } from '@/src/types/github';
// utils
import { fetcher } from '@/src/utils';
// Lottie animation
import animationData from '@/public/lotties/work-in-progress.json';

export default function Dashboard() {
   const { data, isLoading } = useSwr<IGithubUser>('/api/github', fetcher);

   return (
      <div className='flex flex-col gap-5'>
         <HeadingSection
            title="Dashboard"
            body="This is my dashboard. It's a work in progress, but I'm hoping to add more features to it in the future."
         />
         <section className='grid w-full grid-cols-1 gap-4 sm:grid-cols-2'>
            {isLoading && <Loader />}
            {!isLoading && <Stats data={data} />}
         </section>
         <Lottie
            className='mx-auto mt-12'
            style={{ height: 400 }}
            animationData={animationData}
         />
      </div>
   );
}