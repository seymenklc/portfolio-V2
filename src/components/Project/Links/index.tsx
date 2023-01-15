// chakra
import { IconButton, Skeleton, Tooltip } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
// icons
import Github from '@/public/icons/github.svg';
import More from '@/public/icons/more.svg';

interface Props {
   meta: {
      previewURL: string;
      repo: string;
   };
}

export default function Links({ meta }: Props) {
   return (
      <Skeleton isLoaded={Boolean(meta)} className="flex gap-3 md:flex-col">
         <Tooltip label='Source Code'>
            <IconButton
               as='a'
               href={meta.repo}
               target='_blank'
               rel='noopener noreferrer'
               icon={<Github />}
               aria-label='Github'
            />
         </Tooltip>
         <Tooltip label='Live Preview'>
            <IconButton
               as='a'
               href={meta.previewURL}
               target='_blank'
               rel='noopener noreferrer'
               icon={<ExternalLinkIcon />}
               aria-label='Preview'
            />
         </Tooltip>
         <Tooltip label="Project details are still a work in progress.">
            <IconButton
               disabled
               icon={<More />}
               aria-label='More'
            />
         </Tooltip>
      </Skeleton>
   );
}