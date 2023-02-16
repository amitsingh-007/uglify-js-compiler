import { isMobile } from '@solid-primitives/platform';
import { Show, VoidComponent } from 'solid-js';
import CodeInputs from './CodeInputs';
import CodeRunner from './CodeRunner';

const Compiler: VoidComponent = () => (
  <div class="flex h-full flex-col gap-8 pt-10 pb-4">
    <CodeInputs />
    <Show when={!isMobile}>
      <CodeRunner />
    </Show>
  </div>
);

export default Compiler;
