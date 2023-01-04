import { Button } from "@chakra-ui/react";
import Link from "next/link";

interface Props {
   children: React.ReactNode;
}

export default function NavButton({ children }: Props) {
   return (
      <Button variant='ghost' href='/' as={Link} size='sm'>
         {children}
      </Button>
   );
}