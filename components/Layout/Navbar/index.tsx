import { Container } from "@chakra-ui/react";
import NavButton from "@/components/Elements/Button";
import ThemeToggler from "@/components/Layout/Navbar/ThemeToggler";

export default function Navbar() {
   return (
      <Container maxW='3xl' >
         <nav className="flex items-center justify-between py-8">
            <ul className="flex items-center justify-between">
               <NavButton>Home</NavButton>
               <NavButton>Projects</NavButton>
               <NavButton>Dashboard</NavButton>
               <NavButton>Statics</NavButton>
            </ul>
            <ThemeToggler />
         </nav>
      </Container>
   );
}