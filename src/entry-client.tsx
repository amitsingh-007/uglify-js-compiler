// @refresh reload
import { mount, StartClient } from '@solidjs/start/client';

const appNode = document.getElementById('app');
if (appNode) {
  mount(() => <StartClient />, appNode);
}
