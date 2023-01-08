import { Heading, IconButton } from "@chakra-ui/react";
import { techStack } from "@/utils/logos";

export default function Skills() {
   return (
      <section>
         <Heading size='lg' mb={3}>Tech Stack</Heading>
         <div className="flex flex-wrap items-center justify-center gap-2">
            {techStack.map(el => (
               <IconButton
                  key={el.name}
                  aria-label={el.name}
                  icon={<el.icon />}
                  size='lg'
                  margin={0}
                  className="transition-all duration-500 transform scale-125 hover:rotate-3 hover:scale-150"
                  variant='unstyled'
               />
            ))}
         </div>
      </section>
   );
}