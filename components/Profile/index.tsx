import Image from "next/image";
import { Heading, Text, useColorMode, useColorModeValue } from "@chakra-ui/react";

export default function Profile() {
   const { colorMode } = useColorMode();
   const textColor = useColorModeValue('gray.700', 'gray.300');

   const source = colorMode === "light" ? "/images/me_light.png" : "/images/me_dark.png";
   const isDark = colorMode === 'light';

   return (
      <header>
         <div className="grid w-full grid-cols-1 md:grid-cols-3">
            <div className="flex flex-col items-center order-2 md:col-span-2 md:items-start">
               <Heading fontWeight="extrabold">Seymen Kılıç</Heading>
               <Text fontWeight="medium" mt={1}>Frontend Developer</Text>
               <Text mt={4} color={textColor} className='text-center md:text-start'>
                  A Developer based on Turkey. At day, Front-End, at night,
                  a Back-End developer and his glasses are cool.
               </Text>
            </div>
            <div className="flex items-center justify-center md:order-2 md:justify-end">
               <Image
                  src={source}
                  alt="avatar"
                  width={150}
                  height={150}
                  className={`${isDark && 'h-[150px] w-[150px] object-scale-down'}
                  bg-[#828baa] rounded-full p-3`}
               />
            </div>
         </div>
      </header>
   );
}