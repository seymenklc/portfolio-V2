// chakra
import { IconButton } from "@chakra-ui/react";
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
      <div className="flex gap-3 md:flex-col">
         <IconButton
            as='a'
            href={meta.repo}
            target='_blank'
            rel='noopener noreferrer'
            icon={<Github />}
            aria-label='Github'
         />
         <IconButton
            as='a'
            href={meta.previewURL}
            target='_blank'
            rel='noopener noreferrer'
            icon={<ExternalLinkIcon />}
            aria-label='Preview'
         />
         <IconButton
            // as='a'
            // href={project.meta.previewURL}
            // target='_blank'
            // rel='noopener noreferrer'
            disabled
            icon={<More />}
            aria-label='More'
         />
      </div>
   );
}