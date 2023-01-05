import { Container } from "@chakra-ui/react";
// components
import NavButton from "@/components/Layout/Navbar/NavButton";
import MobileMenu from "@/components/Layout/Navbar/MobileMenu";
import ThemeToggler from "@/components/Layout/Navbar/ThemeToggler";

export default function Navbar() {
   return (
      <Container maxW='3xl' paddingX={4}>
         <nav className="flex items-center justify-between py-8">
            <MobileMenu />
            <ul className="items-center justify-between hidden gap-1 sm:flex">
               <NavButton to="/">Home</NavButton>
               <NavButton to="/projects">Projects</NavButton>
               <NavButton to="/dashboard">Dashboard</NavButton>
               <NavButton to="/statics">Statics</NavButton>
            </ul>
            <ThemeToggler />
         </nav>
      </Container>
   );
}