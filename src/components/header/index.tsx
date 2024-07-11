import { VoidComponent } from 'solid-js';
import { Github } from 'lucide-solid';
import { A } from '@solidjs/router';
import ThemeToggle from './theme-toggle';
import { Button } from '~/libs/ui/button';

const Header: VoidComponent = () => {
  return (
    <nav class="relative sticky top-0 z-50 flex flex-row-reverse border-b border-border/40 bg-background/40 bg-background/95 px-4 backdrop-blur md:h-14">
      <h1 class="absolute left-8 top-1/2 -translate-y-1/2 scroll-m-20 text-xl font-semibold normal-case tracking-tight md:absolute md:left-1/2 md:-translate-x-1/2">
        Uglify JS Compiler
      </h1>
      <div class="z-10 flex items-center gap-5">
        <Button
          as={A}
          href="https://github.com/amitsingh-007/uglify-js-compiler"
          target="_blank"
          variant="ghost"
          title="GitHub"
          class="h-fit w-fit rounded-full p-2"
        >
          <Github />
        </Button>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Header;
