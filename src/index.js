import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Context from './Context';
import { GlobalProvider } from './CRUD/context/GlobalState';

ReactDOM.render(
  <React.StrictMode>
    <Context>
      <GlobalProvider>
        <App />
      </GlobalProvider>
    </Context>
  </React.StrictMode>,
  document.getElementById('root')
);
