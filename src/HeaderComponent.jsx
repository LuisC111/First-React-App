import logo from './logo.svg';
import React from 'react';
import './assets/css/head.css';
import './assets/FA/css/all.min.css';


const HeaderComponent = () => (
    <>

<header>

<link rel="stylesheet" href="assets/FA/css/all.min.css"/>
    <link rel="stylesheet" href="assets/css/head.css"/>
      <div class="testLogo">
          <img src={logo} alt="LOGO" width="100" height="50" />
      </div>
      <div class="container" id="container" onclick="myFunction(this)">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
      </div>
      <ul class="navbar" id="navbar">
        <a href="/"><li>	&#127968;&nbsp;Home</li></a>
        <a href="../public/formulario.html"><li>&#10068;&nbsp;Simpsons</li></a>
        <li>&#128214;&nbsp;Portafolio</li>
        <li>&#9743;&nbsp;Contacto</li>
      </ul>
      <div id="care">
        <button type="button" name="button" id="butn" onclick="myFunction2(this)">&#8981;</button>
        <div class="dropdown" id="dropdown">
          <span class="search-icon">&#8981;</span>
        </div>
      </div>
    </header>
    </>
)
export default HeaderComponent;