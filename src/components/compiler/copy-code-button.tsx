import { CheckCheck, Clipboard } from 'lucide-solid';
import { Accessor, VoidComponent, createSignal } from 'solid-js';
import { Button } from '~/libs/ui/button';

const CopyCodeButton: VoidComponent<{
  text: Accessor<string>;
}> = (props) => {
  const [showCopied, setShowCopied] = createSignal(false);

  const handleCopyCode = () => {
    if (showCopied()) {
      return;
    }

    navigator.clipboard.writeText(props.text());
    setShowCopied(true);
    setTimeout(() => {
      setShowCopied(false);
    }, 3000);
  };

  return (
    <div class="absolute right-2 top-2 group-hover:block md:hidden">
      <Button
        variant="secondary"
        class="h-7 w-7 p-[5px]"
        onClick={handleCopyCode}
      >
        {showCopied() ? <CheckCheck /> : <Clipboard />}
      </Button>
    </div>
  );
};
export default CopyCodeButton;
