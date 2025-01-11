import { createScheduled, debounce } from '@solid-primitives/scheduled';
import { Shuffle } from 'lucide-solid';
import { VoidComponent, createMemo, createSignal } from 'solid-js';
import CopyCodeButton from './copy-code-button';
import getCompiledCode from '~/utils/compile';
import { TextFieldRoot } from '../ui/textfield';
import { TextArea } from '../ui/textarea';

const CodeInputOutput: VoidComponent = () => {
  const [inputCode, setInputCode] = createSignal('');

  const scheduled = createScheduled((fn) => debounce(fn, 200));

  const debouncedOutputCode = createMemo((staleValue: string = '') => {
    const newValue = getCompiledCode(inputCode());
    return scheduled() ? newValue : staleValue;
  });

  return (
    <div class="flex flex-col justify-between gap-8 md:flex-row">
      <TextFieldRoot class="w-full md:w-[45%]">
        <TextArea
          autofocus
          placeholder="Enter JavaScript Code"
          class="text-md h-52 w-full resize-none md:h-96"
          onInput={(e) => setInputCode(e.currentTarget.value)}
        />
      </TextFieldRoot>
      <div class="flex justify-center md:items-center">
        <Shuffle class="h-7 w-7 rotate-90 md:rotate-0" />
      </div>
      <TextFieldRoot disabled class="group relative w-full md:w-[45%]">
        <TextArea
          autofocus
          placeholder="Enter some code to uglify"
          class="h-52 w-full !cursor-default resize-none md:h-96"
          value={debouncedOutputCode()}
        />
        <CopyCodeButton text={debouncedOutputCode} />
      </TextFieldRoot>
    </div>
  );
};

export default CodeInputOutput;
