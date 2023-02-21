import { createEventListener } from '@solid-primitives/event-listener';
import { Accessor, createSignal, onMount, Show, VoidComponent } from 'solid-js';
import usePlatform from '~/hooks/usePlatform';
import IconCheck from '~icons/heroicons/check';
import IconClipboard from '~icons/heroicons/clipboard';

const CopyButton: VoidComponent<{
  ref: Accessor<HTMLElement | undefined>;
  text: Accessor<string>;
}> = (props) => {
  const { isMobile } = usePlatform();
  const [showCopy, setShowCopy] = createSignal(false);
  const [showCopied, setShowCopied] = createSignal(false);

  onMount(() => {
    createEventListener(props.ref, ['mouseenter', 'mouseleave'], (e) => {
      setShowCopy(e.type === 'mouseenter');
    });
  });

  const handleCopyCode = () => {
    navigator.clipboard.writeText(props.text());
    setShowCopied(true);
    setTimeout(() => {
      setShowCopied(false);
    }, 3000);
  };

  return (
    <Show when={isMobile || showCopy()}>
      <Show when={!showCopied()}>
        <button
          class="btn-active btn-sm btn-square btn absolute top-2 right-2"
          onClick={handleCopyCode}
        >
          <IconClipboard />
        </button>
      </Show>
      <Show when={showCopied()}>
        <div
          class="tooltip-open tooltip tooltip-left absolute top-2 right-2"
          data-tip="Copied!"
        >
          <button class="btn-sm btn-square btn">
            <IconCheck class="text-success" />
          </button>
        </div>
      </Show>
    </Show>
  );
};
export default CopyButton;
