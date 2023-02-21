import { Show, VoidComponent } from 'solid-js';
import usePlatform from '~/hooks/usePlatform';
import CodeInputs from './CodeInputs';
import CodeRunner from './CodeRunner';

const Compiler: VoidComponent = () => {
  const { isMobile } = usePlatform();

  return (
    <div class="flex h-full flex-col gap-8 pt-10 pb-4">
      <CodeInputs />
      <Show when={!isMobile}>
        <CodeRunner />
      </Show>
    </div>
  );
};

export default Compiler;
