import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

// import App from './todo react app/unsplashPrac.js';
// import App from './todo react app/App.js';
// import App from './expenseTracker/js/App.js';
// import App from './useState.js';
// import App from './context-Api/App.js';
import App from './expenseTracker/App.js';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.register();