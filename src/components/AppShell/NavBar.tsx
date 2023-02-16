import { VoidComponent } from 'solid-js';
import ThemeToggle from './ThemeToggle';

const NavBar: VoidComponent = () => {
  return (
    <nav class="navbar bg-base-100">
      <div class="block w-full select-none text-center text-xl normal-case">
        Uglify JS Compiler
      </div>
      <ThemeToggle />
    </nav>
  );
};

export default NavBar;
