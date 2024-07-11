import { ColorModeProvider, ColorModeScript } from '@kobalte/core';
import { MetaProvider } from '@solidjs/meta';
import { Router } from '@solidjs/router';
import { FileRoutes } from '@solidjs/start/router';
import { ErrorBoundary, Suspense } from 'solid-js';
import Header from '~/components/header';
import './app.css';
import { getStorageManager } from './utils/storage-manager';
import { Toaster } from '~/libs/ui/sonner';

export default function App() {
  return (
    <Router
      root={(props) => (
        <>
          <Suspense>
            <MetaProvider>
              <ColorModeScript storageType="cookie" />
              <ColorModeProvider storageManager={getStorageManager()}>
                <div class="flex h-full flex-col">
                  <Header />
                  <ErrorBoundary fallback={null}>
                    <Toaster />
                  </ErrorBoundary>
                  <ErrorBoundary fallback={null}>
                    <div class="container flex-1">{props.children}</div>
                  </ErrorBoundary>
                </div>
              </ColorModeProvider>
            </MetaProvider>
          </Suspense>
        </>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
