import useTheme from '~/hooks/useTheme';
import IconMoon from '~icons/heroicons/moon';
import IconSun from '~icons/heroicons/sun';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div class="gap-2">
      <IconSun class="text-warning" />
      <input
        type="checkbox"
        class="toggle"
        checked={theme() === 'dark'}
        onChange={(e) => setTheme(e.currentTarget.checked ? 'dark' : 'light')}
      />
      <IconMoon class="text-info" />
    </div>
  );
};

export default ThemeToggle;
