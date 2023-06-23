import { Heading, IconButton, Tooltip } from "@chakra-ui/react";
import { techStack } from "@/utils/logos";

export default function Skills() {
   return (
      <section>
         <Heading size='lg' mb={3}>
            Tech Stack
         </Heading>
         <div className="flex flex-wrap items-center justify-center gap-2 hover:cursor-default">
            {techStack.map(el => (
               <Tooltip
                  key={el.name}
                  label={el.name}
                  placement="top"
                  hasArrow
               >
                  <IconButton
                     aria-label={el.name}
                     icon={<el.icon />}
                     size='lg'
                     margin={0}
                     className="transition-all duration-500 transform scale-125 hover:rotate-3 hover:scale-150 hover:cursor-default"
                     variant='unstyled'
                  />
               </Tooltip>
            ))}
         </div>
      </section>
   );
}