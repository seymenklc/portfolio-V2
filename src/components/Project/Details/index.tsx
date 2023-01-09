// types
import { IProject } from "@/src/types";
// chakra
import { Badge, Heading, Skeleton, Tag, Text } from "@chakra-ui/react";

interface Props {
   project: IProject;
}

export default function Details({ project }: Props) {
   return (
      <div className="flex flex-col items-center justify-center w-full gap-3 cursor-default sm:items-start">
         <Skeleton className="flex justify-between w-full" isLoaded={Boolean(project.meta.title)}>
            <Heading size='md' fontWeight='bold'>
               {project.meta.title}
            </Heading>
            <Badge className="my-auto" colorScheme='purple'>
               {project.meta.date}
            </Badge>
         </Skeleton>
         <Skeleton isLoaded={Boolean(project.meta.description)}>
            <Text fontWeight='semibold' fontSize='sm' className="text-justify">
               {project.meta.description}
            </Text>
         </Skeleton>
         <div className="flex flex-wrap justify-center gap-3">
            {project.meta.tags.map(tag => (
               <Skeleton key={tag} isLoaded={Boolean(tag)}>
                  <Tag className="flex-none"># {tag}</Tag>
               </Skeleton>
            ))}
         </div>
      </div>
   );
}