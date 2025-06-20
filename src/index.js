import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyles from "./styles/global.styled";
import App from './App';
import "normalize.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>
);
