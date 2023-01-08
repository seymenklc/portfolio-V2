import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Button } from "@chakra-ui/react";

interface Props {
   to: string;
   children: React.ReactNode;
}

export default function NavButton({ children, to }: Props) {
   const [isActive, setIsActive] = useState(false);

   const router = useRouter();

   useEffect(() => {
      if (to === router.asPath) setIsActive(true);
      else setIsActive(false);
   }, [router.asPath, to]);

   return (
      <Button variant='ghost' size='sm' href={to} as={Link} isActive={isActive} px={3}>
         {children}
      </Button>
   );
}