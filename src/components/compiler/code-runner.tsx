import { useColorMode } from '@kobalte/core';
import sbSdk, { EmbedOptions, Project, VM } from '@stackblitz/sdk';
import { createEffect, createSignal, onMount, VoidComponent } from 'solid-js';

const CODE_RUNNER_ID = 'embed-coderunner-id';

const PROJECT_OPTS: Project = {
  title: 'Uglify Javascript Compiler',
  description: 'Run your unglified JS Code',
  files: {
    'index.html': `<div id="app"></div>`,
    'index.js': `//Paste your code here \n`,
  },
  template: 'javascript',
};

const EMBED_OPTS: EmbedOptions = {
  hideExplorer: true,
  hideNavigation: true,
  showSidebar: false,
  devToolsHeight: 100,
  clickToLoad: true,
  openFile: 'index.js',
};

const CodeRunner: VoidComponent = () => {
  const { colorMode } = useColorMode();
  const [vm, setVm] = createSignal<VM>();

  onMount(() => {
    sbSdk
      .embedProject(CODE_RUNNER_ID, PROJECT_OPTS, {
        ...EMBED_OPTS,
        theme: colorMode(),
      })
      .then(setVm);
  });

  createEffect(() => {
    vm()?.editor.setTheme(colorMode());
  });

  return <div id={CODE_RUNNER_ID} class="flex-1 rounded-lg" />;
};

export default CodeRunner;
