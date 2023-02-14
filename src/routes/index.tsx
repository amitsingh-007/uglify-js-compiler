import { type VoidComponent } from 'solid-js';
import Compiler from '~/components/Compiler';
import NavBar from '~/components/NavBar';

const Home: VoidComponent = () => {
  return (
    <div class="flex h-full flex-col">
      <NavBar />
      <div class="container flex-1">
        <Compiler />
      </div>
    </div>
  );
};

export default Home;
