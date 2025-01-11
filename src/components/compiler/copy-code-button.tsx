import { CheckCheck, Clipboard, CopyCheck } from 'lucide-solid';
import { Accessor, createSignal, VoidComponent } from 'solid-js';
import { toast } from 'solid-sonner';
import { Button } from '../ui/button';

const CopyCodeButton: VoidComponent<{
  text: Accessor<string>;
}> = (props) => {
  const [showCopied, setShowCopied] = createSignal(false);
  let timeout: NodeJS.Timeout;

  const handleCopyCode = () => {
    clearTimeout(timeout);

    navigator.clipboard.writeText(props.text());
    setShowCopied(true);
    toast('Code copied', {
      description: 'Paste below to run the uglified code',
      icon: <CopyCheck size={18} />,
    });

    timeout = setTimeout(() => {
      setShowCopied(false);
    }, 3000);
  };

  return (
    <div class="absolute right-2 top-2 group-hover:block md:hidden">
      <Button
        variant="secondary"
        class="h-7 w-7 p-[5px]"
        onClick={handleCopyCode}
        disabled={!props.text()}
      >
        {showCopied() ? <CheckCheck /> : <Clipboard />}
      </Button>
    </div>
  );
};
export default CopyCodeButton;
