import { createDebouncedMemoOn } from '@solid-primitives/memo';
import { createSignal, Show, VoidComponent } from 'solid-js';
import usePlatform from '~/hooks/usePlatform';
import getCompiledCode from '~/utils/compile';
import IconShuffleBold from '~icons/ph/shuffle-duotone';
import CopyButton from '../AppShell/CopyButton';

const CodeInputs: VoidComponent = () => {
  const { isMobile } = usePlatform();
  const [outputRef, setOutputRef] = createSignal<HTMLDivElement | undefined>();
  const [inputCode, setInputCode] = createSignal('');

  const compiledCode = createDebouncedMemoOn(
    inputCode,
    (code) => getCompiledCode(code),
    200
  );

  return (
    <div class="flex flex-col justify-between gap-8 md:flex-row">
      <textarea
        autofocus
        class="textarea-primary textarea h-52 resize-none border-2 font-mono md:h-96 md:w-[45%]"
        placeholder="Enter JavaScript Code"
        onInput={(e) => setInputCode(e.currentTarget.value)}
      />
      <Show when={isMobile}>
        <div class="flex justify-center">
          <IconShuffleBold class="h-7 w-7 rotate-90" />
        </div>
      </Show>
      <Show when={!isMobile}>
        <div class="flex items-center">
          <IconShuffleBold class="h-7 w-7" />
        </div>
      </Show>
      <div class="relative md:w-[45%]">
        <div
          ref={(el) => setOutputRef(el)}
          class="textarea-primary textarea h-52 overflow-y-auto overflow-x-hidden border-2 font-mono md:h-96"
        >
          {compiledCode()}
          <CopyButton ref={outputRef} text={compiledCode} />
        </div>
      </div>
    </div>
  );
};

export default CodeInputs;
