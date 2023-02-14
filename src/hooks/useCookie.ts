import { cookieStorage } from '@solid-primitives/storage';
import { isServer } from 'solid-js/web';
import { parseCookie, useServerContext } from 'solid-start';

const useCookie = () => {
  const event = useServerContext();

  const getCookie = <T = 'string'>(key: string) => {
    const cookie = parseCookie(
      isServer ? event.request.headers.get('cookie') ?? '' : document.cookie
    );
    return cookie[key] as T;
  };

  const setCookie = async (key: string, value: string) => {
    if (isServer) {
      throw new Error('Cannot set cookie on the server');
    }
    cookieStorage.setItem(key, value);
  };

  return {
    getCookie,
    setCookie,
  };
};

export default useCookie;
