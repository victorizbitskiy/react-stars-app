import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App"
import { BrowserRouter as Router } from "react-router-dom"

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement)

root.render(
  <Router basename="react-stars-app">
    <App />
  </Router>
);
