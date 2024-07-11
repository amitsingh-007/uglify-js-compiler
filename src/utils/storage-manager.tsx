import {
  ColorModeStorageManager,
  MaybeConfigColorMode,
  COLOR_MODE_STORAGE_KEY,
} from '@kobalte/core';
import { isServer } from 'solid-js/web';
import { getCookie, setCookie } from 'vinxi/http';

const parseCookie = (cookie: string, key: string): MaybeConfigColorMode => {
  const match = cookie.match(new RegExp(`(^| )${key}=([^;]+)`));
  return match?.[2] as MaybeConfigColorMode;
};

const getServerStorageManager = (): ColorModeStorageManager => {
  'use server';

  return {
    type: 'cookie',
    ssr: true,
    get: (fallback) =>
      (getCookie(COLOR_MODE_STORAGE_KEY) as MaybeConfigColorMode) || fallback,
    set: (value) => setCookie(COLOR_MODE_STORAGE_KEY, value),
  };
};

const getClientStorageManager = (): ColorModeStorageManager => {
  'use client';

  return {
    type: 'cookie',
    ssr: false,
    get: (fallback) =>
      parseCookie(document.cookie, COLOR_MODE_STORAGE_KEY) || fallback,
    set: (value) => {
      document.cookie = `${COLOR_MODE_STORAGE_KEY}=${value}; max-age=31536000; path=/`;
    },
  };
};

export const getStorageManager = () =>
  isServer ? getServerStorageManager() : getClientStorageManager();
