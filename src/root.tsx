import { Suspense } from 'solid-js';
import {
  Body,
  ErrorBoundary,
  FileRoutes,
  Html,
  Routes,
  Scripts,
} from 'solid-start';
import MetaTags from './components/MetaTags';
import { useThemeValue } from './hooks/useTheme';
import './root.css';

export default function Root() {
  const { theme } = useThemeValue();

  return (
    <Html lang="en" data-theme={theme()}>
      <MetaTags />
      <Body>
        <Suspense>
          <ErrorBoundary>
            <Routes>
              <FileRoutes />
            </Routes>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}
