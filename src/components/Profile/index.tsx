import Image from "next/image";
import { Heading, Text, useColorModeValue } from "@chakra-ui/react";

export default function Profile() {
   const textColor = useColorModeValue('gray.700', 'gray.300');

   return (
      <header>
         <div className="grid w-full grid-cols-1 md:grid-cols-3">
            <div className="flex flex-col items-center order-2 md:col-span-2 md:items-start">
               <Heading fontWeight="extrabold">Seymen Kılıç</Heading>
               <Text fontWeight="medium" mt={1}>Frontend Developer</Text>
               <Text mt={4} color={textColor} className='text-center md:text-start'>
                  A Self-taught developer based on Turkey. Loves to build a simpler web via React/Nextjs
                  and his glasses are cool.
               </Text>
            </div>
            <div className="flex items-center justify-center md:order-2 md:justify-end">
               <Image
                  src="/images/me_dark.png"
                  alt="avatar"
                  width={150}
                  height={150}
                  className='bg-[#828baa] rounded-full p-3'
               />
            </div>
         </div>
      </header>
   );
}