import sbSdk, { VM } from '@stackblitz/sdk';
import { createEffect, createSignal, onMount, VoidComponent } from 'solid-js';
import { ErrorBoundary } from 'solid-start';
import { useThemeValue } from '~/hooks/useTheme';

const CodeRunner: VoidComponent = () => {
  const { theme } = useThemeValue();
  const [vm, setVm] = createSignal<VM>();

  onMount(() => {
    sbSdk
      .embedProject(
        'embed-coderunner-id',
        {
          title: 'Uglify Javascript Compiler',
          description: 'Run your unglified JS Code',
          files: {
            'index.html': `<div id="app"></div>`,
            'index.js': `//Paste your code here \n`,
          },
          template: 'javascript',
        },
        {
          hideExplorer: true,
          hideNavigation: true,
          showSidebar: false,
          devToolsHeight: 100,
          clickToLoad: true,
          openFile: 'index.js',
          theme: theme(),
        }
      )
      .then(setVm);
  });

  createEffect(() => {
    vm()?.editor.setTheme(theme());
  });

  return (
    <ErrorBoundary>
      <div id="embed-coderunner-id" class="flex-1 rounded-lg" />
    </ErrorBoundary>
  );
};

export default CodeRunner;
