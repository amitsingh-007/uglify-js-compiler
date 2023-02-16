import { createEffect, createRenderEffect, createSignal } from 'solid-js';
import useCookie from './useCookie';

type ITheme = 'light' | 'dark';

const [theme, setTheme] = createSignal<ITheme>('dark');

export const useThemeValue = () => {
  const { getCookie } = useCookie();

  createRenderEffect(() => {
    setTheme(getCookie('theme') ?? 'dark');
  });

  return { theme };
};

export const useTheme = () => {
  const { setCookie } = useCookie();

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
