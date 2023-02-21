import { Show, VoidComponent } from 'solid-js';
import { useTheme } from '~/hooks/useTheme';
import IconMoon from '~icons/heroicons/moon';
import IconSun from '~icons/heroicons/sun';

const ThemeToggle: VoidComponent = () => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <Show when={theme() === 'light'}>
        <button
          class="btn-ghost btn-sm btn-circle btn"
          onClick={() => setTheme('dark')}
        >
          <IconMoon class="text-info" />
        </button>
      </Show>
      <Show when={theme() === 'dark'}>
        <button
          class="btn-ghost btn-sm btn-circle btn"
          onClick={() => setTheme('light')}
        >
          <IconSun class="h-[1.4rem] w-[1.4rem] text-warning" />
        </button>
      </Show>
    </>
  );
};

export default ThemeToggle;
