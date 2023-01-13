import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
// animated icons 
import MoonIcon from "@/src/components/Icons/Animated/MoonIcon";
import SunIcon from "@/src/components/Icons/Animated/SunIcon";

export default function ThemeToggler() {
  const { toggleColorMode } = useColorMode();
  const ThemeIcon = useColorModeValue(MoonIcon, SunIcon);

  return (
    <IconButton
      onClick={toggleColorMode}
      aria-label="toggle theme"
      className="transition-all ring-0 hover:ring-2 ring-slate-400"
      icon={<ThemeIcon />}
    />
  );
}