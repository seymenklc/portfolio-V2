// types
import { IProject } from "@/src/types";
// chakra
import { Badge, Heading, Tag, Text } from "@chakra-ui/react";

interface Props {
   project: IProject;
}

export default function Details({ project }: Props) {
   return (
      <div className="flex flex-col items-center justify-center w-full gap-3 cursor-default sm:items-start">
         <div className="flex justify-between w-full">
            <Heading size='md' fontWeight='bold'>
               {project.meta.title}
            </Heading>
            <Badge className="my-auto" colorScheme='purple'>
               {project.meta.date}
            </Badge>
         </div>
         <Text fontWeight='semibold' fontSize='sm' className="text-justify">
            {project.meta.description}
         </Text>
         <div className="flex flex-wrap justify-center gap-3">
            {project.meta.tags.map(tag => (
               <Tag className="flex-none" key={tag}># {tag}</Tag>
            ))}
         </div>
      </div>
   );
}