import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./style.css";
import  stores from './stores';
import { Provider } from 'react-redux'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={stores}>
    <App />
    </Provider>
  </React.StrictMode>
);


