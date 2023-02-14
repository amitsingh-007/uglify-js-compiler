import { createEffect, createSignal } from 'solid-js';
import useCookie from './useCookie';

type ITheme = 'light' | 'dark';

const useTheme = () => {
  const { getCookie, setCookie } = useCookie();
  const [theme, setTheme] = createSignal<ITheme>(getCookie('theme') ?? 'dark');

  createEffect(() => {
    document.documentElement.setAttribute('data-theme', theme());
  });

  const onThemeChange = (newTheme: ITheme) => {
    setCookie('theme', newTheme);
    setTheme(newTheme);
  };

  return {
    theme,
    setTheme: onThemeChange,
  };
};

export default useTheme;
