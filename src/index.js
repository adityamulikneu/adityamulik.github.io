import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRoutes from './routers/AppRoutes';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
