import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Meta } from '@/types';

const rootDir = path.join(process.cwd(), 'src', 'content', 'projects');

const getAllProjects = () => {
   return fs.readdirSync(rootDir);
};

const getProjectMeta = (currentSlug: string) => {
   const slug = currentSlug.replace(/\.mdx$/, '');
   const filePath = path.join(rootDir, `${slug}.mdx`);
   const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' });

   const { data } = matter(fileContent);

   return {
      meta: { ...data, slug },
   };
};

export const getAllProjectsMeta = () => {

   return getAllProjects()
      .map(file => getProjectMeta(file) as { meta: Meta; })
      .sort((a, b) => {
         return new Date(b.meta?.date).getTime() - new Date(a.meta.date).getTime();
      });
};

export const GetAllSlugs = () => {
   return getAllProjects().map(file => file.replace(/\.mdx$/, ''));
};
