import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import { BaseProvider, LightTheme } from "baseui";
import { Provider as StyletronProvider } from "styletron-react";
import { Client as StyletronClient } from "styletron-engine-monolithic";

import "./index.css";

const engine = new StyletronClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <App />
      </BaseProvider>
    </StyletronProvider>
  </React.StrictMode>
);
