import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { BridgeProvider } from './contexts/BridgeProvider.tsx';
import { DarkModeProvider } from './contexts/DarkModeContext';
import App from './App.tsx';
// import "./helpers/buffer-polyfill.ts";
import './index.css'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BridgeProvider>
      <DarkModeProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </DarkModeProvider>
    </BridgeProvider>
  </React.StrictMode>,
);