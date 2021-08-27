import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import reportWebVitals from './reportWebVitals';
//import NuevoElemento from './NuevoElemento';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import Contenedor from './Contenedor';




ReactDOM.render(
  <React.StrictMode>
    <HeaderComponent />
  </React.StrictMode>,
  document.getElementById('header')
);


ReactDOM.render(
  <React.StrictMode>
    <FooterComponent />
  </React.StrictMode>,
  document.getElementById('footer')
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root2')
);

ReactDOM.render(
  <React.StrictMode>
    <Contenedor />
  </React.StrictMode>,
  document.getElementById('contenedor')
)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();