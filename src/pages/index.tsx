// components
import Profile from '@/components/Profile';
import Skills from '@/components/Skills';
import FeaturedProjects from '@/components/Project/Featured';
// utils
import { getAllProjectsMeta } from '@/utils/project';
// types
import { IProject } from '@/types';

interface Props {
  projects: IProject[];
}

export default function HomePage({ projects }: Props) {
  return (
    <div className='flex flex-col gap-12'>
      <Profile />
      <Skills />
      <FeaturedProjects projects={projects} />
    </div>
  );
}


export async function getStaticProps() {
  return {
    props: {
      projects: getAllProjectsMeta()
    }
  };
};