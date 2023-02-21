import { ParentComponent } from 'solid-js';
import { ErrorBoundary } from 'solid-start';
import NavBar from './NavBar';

const AppShell: ParentComponent = (props) => (
  <div class="flex h-full flex-col">
    <NavBar />
    <div class="container flex-1">
      <ErrorBoundary>{props.children}</ErrorBoundary>
    </div>
  </div>
);

export default AppShell;
