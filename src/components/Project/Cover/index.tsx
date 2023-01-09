import Image from "next/image";
import { Fragment } from "react";
import { Skeleton } from "@chakra-ui/react";

interface Props {
   meta: {
      coverPath: string;
      title: string;
   };
}

export default function Cover({ meta }: Props) {
   return (
      <Fragment>
         {!meta.coverPath && (
            <Skeleton
               className="flex-none w-[250px] h-[150px] rounded w-max-md:w-full max-md:h-full"
            />
         )}
         <Image
            className="object-cover object-top rounded max-md:w-full aspect-video"
            height={150}
            width={250}
            src={meta.coverPath}
            alt={meta.title}
         />
      </Fragment>
   );
}