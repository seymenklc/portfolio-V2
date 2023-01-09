import Link from "next/link";
// types
import { IProject } from "@/src/types";
// chakra
import { Button, Heading } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
// components
import Project from "@/components/Project";

interface Props {
   projects: IProject[];
}

export default function FeaturedProjects({ projects }: Props) {
   return (
      <div >
         <Heading size='lg'>Featured Projects</Heading>
         <section className="flex flex-col gap-4 py-4 mt-2">
            {projects.slice(0, 3).map(p => <Project key={p.meta.slug} project={p} />)}
         </section>
         <Button
            as={Link}
            href='/projects'
            className="group"
            rightIcon={
               <i className="transition-all duration-300 ease-in-out group-hover:translate-x-1">
                  <ArrowForwardIcon />
               </i>
            }
         >
            View All Projects
         </Button>
      </div>
   );
}