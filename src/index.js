import React from 'react';
import App from './components/Routes/App.js'
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
//import NuevoElemento from './NuevoElemento';




ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('header')
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();