import React from "react";
import ReactDOM from "react-dom/client";
import ColorProvider from "./hooks/color-hooks";
import App from "./components/App"

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement)

root.render(
  <ColorProvider>
    <App />
  </ColorProvider>
);
