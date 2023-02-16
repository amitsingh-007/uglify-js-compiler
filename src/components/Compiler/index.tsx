import { VoidComponent } from 'solid-js';
import CodeInputs from './CodeInputs';
import CodeRunner from './CodeRunner';

const Compiler: VoidComponent = () => (
  <div class="flex h-full flex-col gap-8 pt-10 pb-4">
    <CodeInputs />
    <CodeRunner />
  </div>
);

export default Compiler;
