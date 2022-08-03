import React, { createContext } from "react";
import colors from './data/color-data.json';
import ReactDOM from "react-dom/client";
import App from './components/App';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement)
export const ColorContext = createContext();

root.render(
  <ColorContext.Provider value={{ colors }}>
    <App />
  </ColorContext.Provider>
);
