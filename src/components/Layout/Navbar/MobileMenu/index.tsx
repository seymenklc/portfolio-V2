import HamburgerIcon from '@/public/icons/mobile.svg';
import { CloseIcon } from '@chakra-ui/icons';
import { Button, useOutsideClick } from "@chakra-ui/react";
import { useEffect, useRef, useState } from 'react';
import NavButton from '../NavButton';

const navigation = [
  { to: '/', text: 'Home' },
  { to: '/projects', text: 'Projects' },
  { to: '/dashboard', text: 'Dashboard' },
];

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const ref = useRef(null);

  const toggle = () => setIsOpen(!isOpen);
  const hide = () => setIsOpen(false);

  useOutsideClick({ ref: ref, handler: hide });

  return (
    <div className="flex sm:hidden">
      <Button onClick={toggle} variant='link' padding={1} >
        {!isOpen ? <HamburgerIcon /> : <CloseIcon />}
      </Button>
      {isOpen && (
        <div ref={ref} className="absolute flex flex-col gap-2 p-4 inset-y-20 left-5 bg-slate-800 h-max">
          {navigation.map(item => (
            <NavButton key={item.text} to={item.to} onClick={hide}>
              {item.text}
            </NavButton>
          ))}
        </div>
      )}
    </div>
  );
}