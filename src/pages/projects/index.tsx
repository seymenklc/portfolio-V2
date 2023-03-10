// components
import Project from "@/components/Project";
import HeadingSection from "@/components/HeadingSection";
// types
import { IProject } from "@/types";
// utils
import { getAllProjectsMeta } from "@/utils/project";

interface Props {
  projects: IProject[];
}

export default function Projects({ projects }: Props) {
  return (
    <div className="flex flex-col gap-8">
      <HeadingSection
        title="Projects"
        body="Here are some of my projects. I'm always working on something new, so check back often!"
      />
      <section className="flex flex-col gap-3 py-4 mt-2">
        {projects.map(p => <Project key={p.meta.slug} project={p} />)}
      </section>
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