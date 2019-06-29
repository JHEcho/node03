import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './styles/style.scss';

ReactDOM.render(
  <BrowserRouter basename="/mate07">
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);
