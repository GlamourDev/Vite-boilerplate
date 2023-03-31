import "./assets/scss/index.scss";

import { createRoot } from 'react-dom/client';

import App from "./App";
import Store from "./store";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);

root.render(
  <Store>
    <App />
  </Store>
);
