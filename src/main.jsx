import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'assets/styles/fonts.css';
import AppProvider from 'providers/AppProvider';
import Root from 'views/Root';

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <Root />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
