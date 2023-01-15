import Link from "next/link";
import Lottie from 'lottie-react';
import animationData from '@/public/lotties/not-found.json';
import { Heading, Text } from "@chakra-ui/react";

export default function Custom404() {
   return (
      <div>
         <Heading className="mt-12 text-center">Oooops... Looks like you&apos;re lost</Heading>
         <Link href='/'>
            <Text as={'p'} className="mt-6 text-lg text-center cursor-pointer title hover:underline text-slate-400">
               Click here to go back to homepage.
            </Text>
         </Link>
         <Lottie
            className='mx-auto mt-12'
            style={{ height: 400 }}
            animationData={animationData}
         />
      </div>
   );
}