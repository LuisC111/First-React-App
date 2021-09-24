import logo from '../../logo.svg';
import React from 'react';
import '../../assets/css/head.css';
import '../../assets/FA/css/all.min.css';
import { NavLink } from 'react-router-dom';



const HeaderComponent = () => (
    <>

<header>

<link rel="stylesheet" href="../../assets/FA/css/all.min.css"/>
    <link rel="stylesheet" href="../../assets/css/head.css"/>
      <div class="testLogo">
          <img src={logo} alt="LOGO" width="100" height="50" />
      </div>
      <div class="container" id="container" onclick="myFunction(this)">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>

      </div>
      <ul class="navbar" id="navbar">
        <li><NavLink to="/">&#9750;&nbsp;Home</NavLink></li>
        <li><NavLink to="/simpsons_api">&#9731;&nbsp;Simpsons Api</NavLink>
        <ul>
            <li><NavLink to="/estudiantes">&#128444;&nbsp;Simpsons Arreglo</NavLink></li>
          </ul>
        </li>
        <li><NavLink to="/contacto">&#9993;&nbsp;Contacto</NavLink></li>
        <li><NavLink to="/datos_api">&#9729;&nbsp;Datos Api</NavLink>
        <ul>
            <li><NavLink to="/estudiantes">&#128444;&nbsp;Simpsons Arreglo</NavLink></li>
          </ul>

        </li>


      </ul>
      <div id="care">
      <NavLink to="/crud">&#9729;&nbsp;Crud</NavLink>

      </div>
    </header>
    </>
)
export default HeaderComponent;