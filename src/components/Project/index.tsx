import { useEffect } from "react";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from "react-intersection-observer";
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
   const bgColor = useColorModeValue('gray.200', 'gray.700');
   const textColor = useColorModeValue('gray.800', 'none');
   const bgHoverColor = useColorModeValue('hover:bg-gray-300', 'hover:bg-slate-700');

   const animation = useAnimation();
   const { ref, inView } = useInView({ threshold: 0.5 });

   useEffect(() => {
      if (inView) {
         animation.start({ y: 0, opacity: 1, transition: { duration: 0.5 } });
      }

      if (!inView) {
         animation.start({ y: '-1vw', opacity: 0 });
      }
   }, [inView, animation]);

   return (
      <motion.div animate={animation} initial={{ opacity: 0 }}>
         <Box
            ref={ref}
            textColor={textColor}
            bgColor={bgColor}
            className={`flex flex-col items-center gap-4 p-4 transition-all duration-500 ease-out rounded shadow-lg md:flex-row ${bgHoverColor}`}
         >
            <Cover meta={project.meta} />
            <Details project={project} />
            <Links meta={project.meta} />
         </Box>
      </motion.div>
   );
}