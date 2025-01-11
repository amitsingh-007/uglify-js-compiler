import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { ErrorBoundary, Suspense } from "solid-js";
import { MetaProvider } from "@solidjs/meta";
import { Toaster } from "~/components/ui/sonner"
import "./app.css";
import { ColorModeProvider, ColorModeScript } from "@kobalte/core";
import Header from "./components/header";

export default function App() {
  return (
    <Router
      root={(props) => (
        <Suspense>
          <MetaProvider>
          <ColorModeScript />
          <ColorModeProvider>
            <div class="flex h-full flex-col">
              <Header />
              <ErrorBoundary fallback="Something went wrong">
                <div class="container flex-1">{props.children}</div>
              </ErrorBoundary>
              <Toaster />
            </div>
          </ColorModeProvider>
          </MetaProvider>
        </Suspense>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
