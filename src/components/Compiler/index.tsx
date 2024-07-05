import { ErrorBoundary, VoidComponent } from 'solid-js';
import CodeInputOutput from './code-input-output';
import CodeRunner from './code-runner';

const Compiler: VoidComponent = () => {
  return (
    <div class="flex h-full flex-col gap-8 pb-4 pt-10">
      <CodeInputOutput />
      <ErrorBoundary fallback={null}>
        <CodeRunner />
      </ErrorBoundary>
    </div>
  );
};

export default Compiler;
