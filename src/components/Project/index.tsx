// chakra
import { Box, useColorModeValue } from "@chakra-ui/react";
// types
import { IProject } from "@/types";
// components
import Cover from "@/components/Project/Cover";
import Links from "@/components/Project/Links";
import Details from "@/components/Project/Details";

interface Props {
   project: IProject;
}

export default function Project({ project }: Props) {
   const textColor = useColorModeValue('gray.800', 'none');
   const bgColor = useColorModeValue('gray.200', 'gray.700');

   return (
      <Box textColor={textColor} bgColor={bgColor} className="flex flex-col items-center gap-4 p-4 transition-all duration-500 ease-out rounded shadow-lg md:flex-row hover:scale-105">
         <Cover meta={project.meta} />
         <Details project={project} />
         <Links meta={project.meta} />
      </Box>
   );
}