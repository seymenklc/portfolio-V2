import { Container } from "@chakra-ui/react";
// components
import NavButton from "@/components/Layout/Navbar/NavButton";
import MobileMenu from "@/components/Layout/Navbar/MobileMenu";
import ThemeToggler from "@/components/Layout/Navbar/ThemeToggler";

const navigation = [
   { to: '/', text: 'Home' },
   { to: '/projects', text: 'Projects' },
   { to: '/dashboard', text: 'Dashboard' },
];

export default function Navbar() {
   return (
      <Container maxW='3xl' paddingX={3}>
         <nav className="flex items-center justify-between py-8">
            <MobileMenu />
            <div className="items-center justify-between hidden gap-2 sm:flex">
               {navigation.map(item => (
                  <NavButton key={item.text} to={item.to}>
                     {item.text}
                  </NavButton>
               ))}
            </div>
            <ThemeToggler />
         </nav>
      </Container>
   );
}