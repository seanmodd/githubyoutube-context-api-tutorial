import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CartContext from './CartContext';
import { CrudProvider } from './CRUD/context/CrudState';

ReactDOM.render(
  <React.StrictMode>
    <CartContext>
      <CrudProvider>
        <App />
      </CrudProvider>
    </CartContext>
  </React.StrictMode>,
  document.getElementById('root')
);
