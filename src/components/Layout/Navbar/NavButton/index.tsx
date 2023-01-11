import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Button } from "@chakra-ui/react";

interface Props {
   to: string;
   as?: string;
   onClick?: () => void;
   onBlur?: () => void;
   onFocus?: () => void;
   variant?: string;
   external?: boolean;
   children: React.ReactNode;
}

export default function NavButton(props: Props) {
   const [isActive, setIsActive] = useState(false);

   const {
      to,
      children,
      onClick,
      onBlur,
      onFocus,
      external = false,
      variant = 'ghost'
   } = props;

   const router = useRouter();

   useEffect(() => {
      if (to === router.asPath) setIsActive(true);
      else setIsActive(false);
   }, [router.asPath, to]);

   return (
      <Button
         onBlur={onBlur && onBlur}
         onFocus={onFocus && onFocus}
         onClick={onClick && onClick}
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