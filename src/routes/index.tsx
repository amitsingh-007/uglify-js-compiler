import Compiler from '~/components/compiler/index.tsx';
import MetaTags from './meta-tags';

export default function Home() {
  return (
    <>
      <MetaTags />
      <main class="mx-auto p-4 text-center">
        <Compiler />
      </main>
    </>
  );
}
