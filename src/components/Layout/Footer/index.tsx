import { Container } from "@chakra-ui/react";
// components
import NavButton from "@/components/Layout/Navbar/NavButton";
import CurrentlyPlaying from "@/components/CurrentyPlaying";

const linkedin = 'https://www.linkedin.com/in/seymen/';
const github = 'https://github.com/seymenklc';
const mail = 'seymennklc@gmail.com';

export default function Footer() {
  return (
    <Container maxW='3xl' paddingX={3}>
      <hr className="pt-5 border-t" />
      <footer className="flex flex-col items-center justify-between h-24 gap-5 p-4 mb-20 sm:mb-0 sm:flex-row sm:gap-0">
        <span className="-ml-5"><CurrentlyPlaying /></span>
        <nav className="flex justify-center gap-4">
          <NavButton external variant="link" to={linkedin}>
            LinkedIn
          </NavButton>
          <NavButton external variant="link" to={github}>
            Github
          </NavButton>
          <NavButton variant="link" to={`mailto:${mail}`}>
            Email
          </NavButton>
        </nav>
      </footer>
    </Container>
  );
}