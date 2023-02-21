import { VoidComponent } from 'solid-js';
import MdiGithub from '~icons/mdi/github';
import ThemeToggle from './ThemeToggle';

const NavBar: VoidComponent = () => {
  return (
    <div class="container">
      <nav class="navbar relative flex flex-row-reverse bg-base-100 px-0">
        <span class="absolute block w-full select-none font-mono text-base normal-case md:text-center md:text-lg">
          Uglify JS Compiler
        </span>
        <div class="z-10 flex gap-5">
          <a
            class="btn-ghost btn-sm btn-circle btn"
            href="https://github.com/amitsingh-007/uglify-js-compiler"
            target="_blank"
            title="GitHub"
          >
            <MdiGithub class="h-6 w-6 md:h-7 md:w-7" />
          </a>
          <ThemeToggle />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
