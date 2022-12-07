import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import 'assets/styles/fonts.css';
import AppProvider from 'providers/AppProvider';

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
