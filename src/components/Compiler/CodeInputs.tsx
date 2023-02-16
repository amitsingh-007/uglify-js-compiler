import { createDebouncedMemoOn } from '@solid-primitives/memo';
import { createSignal, VoidComponent } from 'solid-js';
import getCompiledCode from '~/utils/compile';
import IconCodeBracket from '~icons/heroicons/code-bracket';
import CopyButton from '../AppShell/CopyButton';

const CodeInputs: VoidComponent = () => {
  const [outputRef, setOutputRef] = createSignal<HTMLDivElement | undefined>();
  const [inputCode, setInputCode] = createSignal('');

  const compiledCode = createDebouncedMemoOn(
    inputCode,
    (code) => getCompiledCode(code),
    200
  );

  return (
    <div class="flex flex-col gap-8 md:flex-row">
      <textarea
        class="textarea-primary textarea h-52 resize-none md:h-96 md:flex-1"
        placeholder="Enter JavaScript Code"
        onInput={(e) => setInputCode(e.currentTarget.value)}
      />
      <div class="w-inherit flex w-[inherit] items-center justify-center md:h-96 md:w-auto">
        <button class="btn-primary btn gap-2">
          Compile <IconCodeBracket class="font-bold" />
        </button>
      </div>
      <div class="relative md:flex-1">
        <div
          ref={(el) => setOutputRef(el)}
          class="textarea-primary textarea h-52 overflow-y-auto md:h-96"
        >
          {compiledCode()}
          <CopyButton ref={outputRef} text={compiledCode} />
        </div>
      </div>
    </div>
  );
};

export default CodeInputs;
