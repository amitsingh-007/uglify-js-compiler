import { type VoidComponent } from 'solid-js';
import AppShell from '~/components/AppShell';
import Compiler from '~/components/Compiler';

const Home: VoidComponent = () => (
  <AppShell>
    <Compiler />
  </AppShell>
);

export default Home;
