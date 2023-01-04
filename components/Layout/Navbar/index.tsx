import { Button, Container, IconButton } from "@chakra-ui/react";
import { SunIcon } from '@chakra-ui/icons';
import NavButton from "@/components/Elements/Button";

export default function Navbar() {
   return (
      <Container maxW='3xl' >
         <nav className="flex items-center justify-between py-8">
            <ul className="flex items-center justify-between">
               <NavButton>Home</NavButton>
               <NavButton>Projects</NavButton>
               <NavButton>Home</NavButton>
               <NavButton>Home</NavButton>
            </ul>
            <IconButton aria-label="activate dark mode" icon={<SunIcon />} />
         </nav>
      </Container>
   );
}