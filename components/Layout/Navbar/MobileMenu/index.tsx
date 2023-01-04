import HamburgerIcon from '@/public/icons/hamburger.svg';
import { Button, IconButton } from "@chakra-ui/react";

export default function MobileMenu() {
  return (
    <div className="flex sm:hidden">
      <Button variant='link' padding={1}>
        <HamburgerIcon />
      </Button>
      <ul>

      </ul>
    </div>
  );
}