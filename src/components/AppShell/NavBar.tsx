import { VoidComponent } from 'solid-js';
import ThemeToggle from './ThemeToggle';

const NavBar: VoidComponent = () => {
  return (
    <div class="container">
      <nav class="navbar bg-base-100 px-0">
        <span class="block w-full select-none font-mono text-base normal-case md:text-center md:text-lg">
          Uglify JS Compiler
        </span>
        <ThemeToggle />
      </nav>
    </div>
  );
};

export default NavBar;
