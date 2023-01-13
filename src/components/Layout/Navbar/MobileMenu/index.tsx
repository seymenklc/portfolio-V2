import { useRef, useState } from 'react';
// chakra
import { CloseIcon } from '@chakra-ui/icons';
import { Box, Button, useColorModeValue, useOutsideClick } from "@chakra-ui/react";
// components
import NavButton from '@/components/Layout/Navbar/NavButton';
// icons
import HamburgerIcon from '@/public/icons/mobile.svg';

const navigation = [
  { to: '/', text: 'Home' },
  { to: '/projects', text: 'Projects' },
  { to: '/dashboard', text: 'Dashboard' },
];

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const ref = useRef(null);

  const bgColor = useColorModeValue('gray.200', 'gray.700');

  const toggle = () => setIsOpen(!isOpen);
  const hide = () => setIsOpen(false);

  useOutsideClick({ ref: ref, handler: hide });

  return (
    <div className="flex sm:hidden">
      <Button onClick={toggle} variant='link' padding={1} >
        {!isOpen ? <HamburgerIcon /> : <CloseIcon />}
      </Button>
      {isOpen && (
        <Box bgColor={bgColor} className="absolute flex flex-col gap-2 p-4 rounded inset-y-20 left-5 bg-slate-800 h-max">
          {navigation.map(item => (
            <NavButton key={item.text} to={item.to} onClick={hide}>
              {item.text}
            </NavButton>
          ))}
        </Box>
      )}
    </div>
  );
}