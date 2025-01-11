import { useColorMode } from '@kobalte/core';
import { SunMoon } from 'lucide-solid';
import { VoidComponent } from 'solid-js';
import { Button } from '../ui/button';

const ThemeToggle: VoidComponent = () => {
  const { colorMode, setColorMode } = useColorMode();

  return (
    <Button
      variant="ghost"
      class="h-fit w-fit rounded-full p-2"
      onClick={() => setColorMode(colorMode() === 'light' ? 'dark' : 'light')}
    >
      <SunMoon />
    </Button>
  );
};

export default ThemeToggle;
