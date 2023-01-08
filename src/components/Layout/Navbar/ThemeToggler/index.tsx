import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { IconButton, useColorMode } from "@chakra-ui/react";

export default function ThemeToggler() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      onClick={toggleColorMode}
      aria-label="toggle theme"
      className="transition-all ring-0 hover:ring-2 ring-slate-400"
      icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
    />
  );
}