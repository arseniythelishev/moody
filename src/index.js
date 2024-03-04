import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from 'react-use-cart';
import { ContextProvider } from './Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <ContextProvider>
          <App />
        </ContextProvider>
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);
