import HamburgerIcon from '@/public/icons/mobile.svg';
import { Button } from "@chakra-ui/react";

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