import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Button } from "@chakra-ui/react";

interface Props {
   to: string;
   variant?: string;
   external?: boolean;
   children: React.ReactNode;
}

export default function NavButton(props: Props) {
   const [isActive, setIsActive] = useState(false);

   const { children, to, external = false, variant = 'ghost' } = props;

   const router = useRouter();

   useEffect(() => {
      if (to === router.asPath) setIsActive(true);
      else setIsActive(false);
   }, [router.asPath, to]);

   return (
      <Button
         target={external ? '_blank' : '_self'}
         variant={variant}
         size='sm'
         href={to}
         as={Link}
         isActive={isActive}
         px={3}
      >
         {children}
      </Button>
   );
}